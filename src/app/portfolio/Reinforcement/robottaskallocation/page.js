'use client';

import { useState, useEffect } from "react";

export default function WarehouseDashboard() {
  // Simulation parameters with initial values
  const [robotCount, setRobotCount] = useState(5);
  const [taskPriority, setTaskPriority] = useState(1);
  const [itemLocations, setItemLocations] = useState("2,3;5,7");

  // Grid dimensions (e.g., 10x10 warehouse floor)
  const gridRows = 10;
  const gridCols = 10;

  // Simulation state: robots, task assignments, and performance metrics
  const [robots, setRobots] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [metrics, setMetrics] = useState({ tasksCompleted: 0, efficiency: 0 });

  // Initialize robots when the robotCount changes
  useEffect(() => {
    const initialRobots = [];
    for (let i = 0; i < robotCount; i++) {
      initialRobots.push({
        id: i,
        x: Math.floor(Math.random() * gridCols),
        y: Math.floor(Math.random() * gridRows),
      });
    }
    setRobots(initialRobots);
  }, [robotCount, gridCols, gridRows]);

  // Simulation loop: update robot positions, metrics, and task assignments every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update each robot's position randomly within grid bounds
      setRobots((prevRobots) =>
        prevRobots.map((robot) => {
          let newX = robot.x + (Math.random() < 0.5 ? -1 : 1);
          let newY = robot.y + (Math.random() < 0.5 ? -1 : 1);
          newX = Math.max(0, Math.min(gridCols - 1, newX));
          newY = Math.max(0, Math.min(gridRows - 1, newY));
          return { ...robot, x: newX, y: newY };
        })
      );
      // Simulate performance metric updates
      setMetrics((prev) => ({
        tasksCompleted: prev.tasksCompleted + Math.floor(Math.random() * 3),
        efficiency: Math.floor(Math.random() * 100),
      }));
      // Generate a new task assignment randomly
      setTasks((prev) => {
        const newTask = {
          id: Date.now(),
          robotId: Math.floor(Math.random() * robotCount),
          description: `Pick item at ${Math.floor(Math.random() * gridCols)},${Math.floor(
            Math.random() * gridRows
          )}`,
        };
        // Keep only the latest 5 tasks
        return [newTask, ...prev].slice(0, 5);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [robotCount, gridCols, gridRows]);

  // Handle simulation control form submission to update parameters
  const handleSimulationUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRobotCount = parseInt(formData.get("robotCount"));
    const newTaskPriority = parseInt(formData.get("taskPriority"));
    const newItemLocations = formData.get("itemLocations");
    setRobotCount(newRobotCount);
    setTaskPriority(newTaskPriority);
    setItemLocations(newItemLocations);
    // The robot initialization effect will run due to the updated robotCount.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Page Header */}
      <header className="mb-5">
        <h1 className="text-3xl font-bold text-center">Warehouse Dashboard</h1>
      </header>

      <div className="grid grid-cols-12 gap-5">
        {/* Warehouse Grid Visualization (Grid-based UI) */}
        <div className="col-span-8">
          <div className="grid grid-cols-10 gap-1 border border-gray-400">
            {Array.from({ length: gridRows }).map((_, row) =>
              Array.from({ length: gridCols }).map((_, col) => {
                // Check if a robot is at this grid cell
                const robotHere = robots.find((r) => r.x === col && r.y === row);
                return (
                  <div
                    key={`${row}-${col}`}
                    className="w-12 h-12 border border-gray-300 flex items-center justify-center bg-white"
                  >
                    {robotHere && (
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        {robotHere.id}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Side Panel for Task Assignments, Performance Metrics, and Simulation Controls */}
        <div className="col-span-4 space-y-5">
          {/* Task Assignments */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Task Assignments</h2>
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="mb-2">
                  <span className="font-bold">Robot {task.robotId}:</span> {task.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Performance Metrics</h2>
            <p>Tasks Completed: {metrics.tasksCompleted}</p>
            <p>Efficiency: {metrics.efficiency}%</p>
          </div>

          {/* Simulation Control */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Simulation Control</h2>
            <form onSubmit={handleSimulationUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Robot Count</label>
                <input
                  type="number"
                  name="robotCount"
                  defaultValue={robotCount}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Task Priority</label>
                <input
                  type="number"
                  name="taskPriority"
                  defaultValue={taskPriority}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Item Locations (e.g., "2,3;5,7")
                </label>
                <input
                  type="text"
                  name="itemLocations"
                  defaultValue={itemLocations}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Update Simulation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
