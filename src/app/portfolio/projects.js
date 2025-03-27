
export const projects = [
   //FNN STARTS HERE
   {
    title: "Predictive Maintenance System",
    type: "FNN",
    image: "100.jpg",
    description:
      "Build a system to predict equipment failure in industries like manufacturing or aviation using sensor data.",
    techStack: "Python, TensorFlow, Streamlit, MLP",
    link: "/portfolio/FNN/dashboard",
  },
  {
    title: "Customer Churn Prediction for Businesses",
    type: "FNN",
    image: "100.jpg",
    description:
      "Create a model to predict customer churn based on behavioral and transactional data, helping businesses retain customers.",
    techStack: "Python, TensorFlow, SHAP, MLP",
    link: "/portfolio/FNN/churn",
  },
  {
    title: "Fraud Detection in Financial Transactions",
    type: "FNN",
    image: "100.jpg",
    description:
      "Design an FNN-based system to identify fraudulent transactions in financial systems by classifying historical transaction data.",
    techStack: "Python, TensorFlow, SMOTE, MLP, XGBoost",
    link: "/portfolio/FNN/fraud",
  },
  {
    title: "Personalized Recommendation System for E-Learning Platforms",
    type: "FNN",
    image: "100.jpg",
    description:
      "Create a recommendation engine that suggests courses or content based on user preferences and past interactions.",
    techStack: "Python, TensorFlow, MovieLens, Coursera Dataset, MLP",
    link: "/portfolio/FNN/courserecommendation",
  },
  {
    title: "Handwritten Digit Classification (MNIST), but Enhanced",
    type: "FNN",
    image: "100.jpg",
    description:
      "Implement an enhanced digit classification system using the MNIST dataset, with noise handling and transfer learning for multilingual datasets.",
    techStack: "Python, TensorFlow, PCA, MLP, Transfer Learning",
    link: "/portfolio/FNN/digitclassification",
  },  

      //CONVULUTIONAL NEURAL NETWORKS
      {
  title: "Real-Time Object Detection and Tracking",
  type: "CNN",
  image: "robot dog.jpg",
  description:
    "Implement a real-time object detection and tracking system using CNN-based models like YOLO or Faster R-CNN, extended with tracking algorithms like SORT for live video stream processing.",
  techStack: "Python, TensorFlow, PyTorch, OpenCV",
  link: "/portfolio/CNN/real-time-object-detection",
},
{
  title: "Automated Medical Image Diagnosis",
  type: "CNN",
  image: "robot dog.jpg",
  description:
    "Develop a CNN model to classify and detect diseases from medical images such as X-rays, MRIs, or CT scans, with features like data preprocessing and explainability through Grad-CAM.",
  techStack: "Python, TensorFlow, Keras, PyTorch",
  link: "/portfolio/CNN/automated-medical-diagnosis",
},
{
  title: "Facial Expression Recognition System",
  type: "CNN",
  image: "robot dog.jpg",
  description:
    "Build a system that classifies emotions from facial images using CNNs, with data augmentation for improved accuracy and deployment in web or mobile apps.",
  techStack: "Python, PyTorch, TensorFlow, FER2013",
  link: "/portfolio/CNN/facial-expression-recognition",
},
{
  title: "Autonomous Drone Navigation System",
  type: "CNN",
  image: "robot dog.jpg",
  description:
    "Create a drone navigation system using CNN-based object detection and segmentation for obstacle avoidance, integrated with a simulator like AirSim or Gazebo.",
  techStack: "Python, TensorFlow, PyTorch, ROS",
  link: "/portfolio/CNN/autonomous-drone-navigation",
},
{
  title: "Style Transfer and Image Enhancement",
  type: "CNN",
  image: "robot dog.jpg",
  description:
    "Design a system for artistic style transfer or image enhancement using advanced CNN architectures, including neural style transfer and super-resolution.",
  techStack: "Python, PyTorch, TensorFlow, Flask, ReactJS",
  link: "/portfolio/CNN/style-transfer-image-enhancement",
},

 
      // RNN projects
  {
    title: "Advanced Time Series Forecasting with LSTM/GRU",
    type: "RNN",
    image: "1000.jpg",
    description:
      "Build a model to forecast stock prices, electricity demand, or weather patterns using LSTMs or GRUs, incorporating external features and comparing performance with baseline models.",
    techStack: "Python, TensorFlow, Keras, PyTorch",
    link: "/portfolio/RNN/timeseriesforecasting",
  },
  {
    title: "Real-Time Speech Recognition System",
    type: "RNN",
    image: "1000.jpg",
    description:
      "Implement a speech-to-text system using Bi-Directional LSTMs or GRUs, leveraging MFCCs or spectrograms as inputs and fine-tuning with domain-specific vocabularies.",
    techStack: "Python, TensorFlow, Keras, PyTorch",
    link: "/portfolio/RNN/speechrecognition",
  },
  {
    title: "Automated Music Composition with LSTM",
    type: "RNN",
    image: "1000.jpg",
    description:
      "Create a system that generates music by learning patterns in MIDI files, using LSTMs and GRUs with post-processing for musical coherence.",
    techStack: "Python, TensorFlow, Keras, PyTorch",
    link: "/portfolio/RNN/musicgeneration",
  },
  {
    title: "Sentiment Analysis with Bi-Directional RNNs",
    type: "RNN",
    image: "1000.jpg",
    description:
      "Develop a sentiment analysis model using Bi-Directional LSTMs to classify text sentiment with an interactive web app and attention visualization.",
    techStack: "Python, TensorFlow, Keras, PyTorch",
    link: "/portfolio/RNN/sentimentanalysis",
  },
  {
    title: "Anomaly Detection in IoT Data with RNNs",
    type: "RNN",
    image: "1000.jpg",
    description:
      "Train an LSTM/GRU-based autoencoder to detect anomalies in IoT sensor data, using reconstruction errors and real-time dashboards for visualization.",
    techStack: "Python, TensorFlow, Keras, PyTorch",
    link: "/portfolio/RNN/anomalydetection",
  },
      //Transformers
      {
        title: "Multimodal Search Engine Using CLIP",
        type: "Transformers",
        image: "10312453.jpg",
        description:
          "Build a multimodal search engine where users can query using text or images and retrieve relevant results from a database of images or videos.",
        techStack: "CLIP, FastAPI, Next.js, Pinecone, FAISS",
        link: "/portfolio/Transformer/searchengine",
      },
      {
        title: "Custom GPT for Domain-Specific Text Generation",
        type: "Transformers",
        image: "10312453.jpg",
        description:
          "Train a domain-specific GPT model for generating text, such as legal documents, financial reports, or academic papers.",
        techStack: "Hugging Face, Pandas, NLTK, Streamlit, Gradio",
        link: "/portfolio/Transformer/customgpt",
      },
      {
        title: "Vision Transformer (ViT) for Medical Image Analysis",
        type: "Transformers",
        image: "10312453.jpg",
        description:
          "Develop a deep learning pipeline using Vision Transformers for analyzing medical images (e.g., X-rays or MRIs) and identifying diseases.",
        techStack: "ViT, Swin Transformer, PyTorch, Keras, DICOM, Grad-CAM",
        link: "/portfolio/Transformer/imageanalysis",
      },
      {
        title: "Text-to-Image Generation with Stable Diffusion",
        type: "Transformers",
        image: "10312453.jpg",
        description:
          "Build a text-to-image generation platform using Stable Diffusion or a similar transformer-based architecture.",
        techStack: "Stable Diffusion, DALL·E, Flask, FastAPI, AWS, GCP",
        link: "/portfolio/Transformer/textimage",
      },
      {
        title: "Unified NLP Platform with T5",
        type: "Transformers",
        image: "10312453.jpg",
        description:
          "Develop a unified NLP application where users can perform multiple text-related tasks, such as summarization, translation, and Q&A, using T5.",
        techStack: "T5, Hugging Face, React, Next.js, PostgreSQL",
        link: "/portfolio/Transformer/unifiednlp",
      },

      
      //GenerativeModels

        {
          title: "Image Synthesis with Style Transfer and GANs",
          type: "GenerativeModels",
          image: "10312453.jpg",
          description:
            "Create a neural style transfer application that generates artworks by combining the style of one image with the content of another. Additionally, use a GAN-based approach for high-resolution artistic image synthesis.",
          techStack: "Python, TensorFlow, StyleGAN, CycleGAN, React, Next.js",
          link: "/portfolio/GenerativeModels/imagesynthesis",
        },
        {
          title: "Variational Autoencoder for Anomaly Detection",
          type: "GenerativeModels",
          image: "10312453.jpg",
          description:
            "Build a VAE-based anomaly detection system to identify anomalies in data, such as defects in manufacturing images or fraud detection in transactions.",
          techStack: "Python, TensorFlow, Keras, VAE, PyTorch",
          link: "/portfolio/GenerativeModels/anomalydetectvae",
        },
        {
          title: "Diffusion Model for Text-to-Image Generation",
          type: "GenerativeModels",
          image: "10312453.jpg",
          description:
            "Implement a diffusion-based model to generate images from text descriptions, inspired by models like DALL·E 2 or Stable Diffusion.",
          techStack: "Python, TensorFlow, PyTorch, CLIP, DDPM",
          link: "/portfolio/GenerativeModels/textimagediff",
        },
        {
          title: "Data Augmentation with GANs for Imbalanced Datasets",
          type: "GenerativeModels",
          image: "10312453.jpg",
          description:
            "Develop a tool to generate synthetic data using GANs to augment imbalanced datasets in fields like healthcare, finance, or e-commerce.",
          techStack: "Python, TensorFlow, PyTorch, CGAN, AC-GAN",
          link: "/portfolio/GenerativeModels/datasetaugmentation",
        },
        {
          title: "Music Generation Using Variational Autoencoders and GANs",
          type: "GenerativeModels",
          image: "10312453.jpg",
          description:
            "Create a music generation system that composes melodies or full tracks using a combination of VAEs and GANs.",
          techStack: "Python, TensorFlow, PyTorch, VAE, WaveGAN, SpecGAN",
          link: "/portfolio/GenerativeModels/musicgeneration",
        },      


      //GRAPH NEURAL NETWORK
      {
        title: "Social Network Analysis with GCN",
        type: "GNN",
        image: "6505995.jpg",
        description:
          "Develop a GCN-based model to analyze and predict social network interactions, such as friend recommendations or community detection in platforms like Facebook or LinkedIn.",
        techStack: "Python, PyTorch, NetworkX, DGL",
        link: "/portfolio/GNN/socialnetworkanalysis",
      },
      {
        title: "Drug Discovery Using GNNs",
        type: "GNN",
        image: "6505995.jpg",
        description:
          "Build a drug discovery pipeline to predict molecular properties (e.g., toxicity, solubility) using Message Passing Neural Networks (MPNNs).",
        techStack: "Python, PyTorch, RDKit, DGL",
        link: "/portfolio/GNN/drugdiscoveries",
      },
      {
        title: "Personalized Recommendation System with GAT",
        type: "GNN",
        image: "6505995.jpg",
        description:
          "Create a recommendation engine for e-commerce or streaming platforms using GATs to model relationships between users, items, and interactions.",
        techStack: "Python, PyTorch, DGL, Scikit-Learn",
        link: "/portfolio/GNN/recommendationsystem",
      },
      {
        title: "Fraud Detection in Financial Networks",
        type: "GNN",
        image: "6505995.jpg",
        description:
          "Develop a GNN-based system to detect fraudulent transactions in financial networks.",
        techStack: "Python, PyTorch, DGL, NetworkX",
        link: "/portfolio/GNN/frauddetection",
      },
      {
        title: "Traffic Prediction in Transportation Networks",
        type: "GNN",
        image: "6505995.jpg",
        description:
          "Build a GNN-based model to predict traffic flow and congestion in city road networks.",
        techStack: "Python, PyTorch, DGL, Scikit-Learn",
        link: "/portfolio/GNN/trafficprediction",
      },


      //REINFORCEMENT LEARNING

        {
          title: "Autonomous Drone Navigation in a Dynamic Environment",
          type: "reinforcement",
          image: "3033279.jpg",
          description:
            "Use reinforcement learning to teach a drone to navigate through a dynamic environment with moving obstacles. Implements PPO for stable learning and DQN for real-time decision-making.",
          techStack: "Python, OpenAI Gym, Unity ML-Agents, ROS, PyTorch, TensorFlow",
          link: "/portfolio/Reinforcement/dronenavigation",
        },
        {
          title: "Game AI Using AlphaZero for Complex Games",
          type: "reinforcement",
          image: "3033279.jpg",
          description:
            "Implement the AlphaZero architecture to train a game-playing agent using Monte Carlo Tree Search (MCTS) combined with deep neural networks to master complex strategy games.",
          techStack: "Python, TensorFlow, PyTorch, MCTS",
          link: "/portfolio/Reinforcement/gameAI",
        },
        {
          title: "Self-Driving Car Simulation with Actor-Critic Method",
          type: "reinforcement",
          image: "3033279.jpg",
          description:
            "Develop an RL model to control a self-driving car in a simulated environment. Uses Actor-Critic methods to optimize policy learning for safe and efficient driving.",
          techStack: "Python, CARLA Simulator, OpenAI Gym, TensorFlow, Keras",
          link: "/portfolio/Reinforcement/selfdriving",
        },
        {
          title: "Optimizing Warehouse Robot Task Allocation",
          type: "reinforcement",
          image: "3033279.jpg",
          description:
            "Create an RL-based solution for warehouse robots to optimize task allocation using DQN. Ensures efficient item pickup and placement based on dynamic conditions.",
          techStack: "Python, OpenAI Gym, Unity, TensorFlow, PyTorch, Simulated Robotics Environment",
          link: "/portfolio/Reinforcement/robottaskallocation",
        },
        {
          title: "Real-Time Adaptive Traffic Signal Control",
          type: "reinforcement",
          image: "3033279.jpg",
          description:
            "Implement an RL-based traffic signal controller using PPO or DQN to optimize real-time traffic flow, reduce congestion, and improve urban mobility.",
          techStack: "Python, SUMO, OpenAI Gym, TensorFlow",
          link: "/portfolio/Reinforcement/trafficsignalcontrol",
        },
      

      //HYBRID MODELS
        {
          title: "Multimodal Sentiment Analysis System",
          type: "HybridModels",
          image: "1000.jpg",
          description:
            "An AI system combining NLP and computer vision to analyze sentiment in social media posts, detecting sarcasm, hate speech, and emotional tone.",
          techStack: "Python, TensorFlow, PyTorch, CLIP, FLAVA, BERT, ViT",
          link: "/portfolio/hybridModels/SentimentAnalysis",
        },
        {
          title: "Hybrid Time-Series Forecasting Model",
          type: "HybridModels",
          image: "1000.jpg",
          description:
            "A predictive model combining CNNs for pattern recognition and LSTMs for sequential learning to forecast stock prices, weather, and energy consumption.",
          techStack: "Python, TensorFlow, PyTorch, CNN, LSTM, GRU, Attention Mechanism",
          link: "/portfolio/hybridModels/ForecastingModel",
        },
        {
          title: "Autonomous Video Surveillance System",
          type: "HybridModels",
          image: "1000.jpg",
          description:
            "An AI-powered surveillance system utilizing CNNs for object detection, RNNs for motion analysis, and transformers for event classification.",
          techStack: "Python, OpenCV, TensorFlow, PyTorch, YOLOv8, Faster R-CNN, ViT, Swin Transformer",
          link: "/portfolio/hybridModels/VideoSurveillance",
        },
        {
          title: "AI-Powered Medical Diagnosis System",
          type: "HybridModels",
          image: "1000.jpg",
          description:
            "A hybrid model analyzing medical scans and clinical text to assist in automated disease detection, including cancer and diabetic retinopathy.",
          techStack: "Python, TensorFlow, Keras, BioBERT, CNN, Transformers",
          link: "/portfolio/hybridModels/MedicalDiagnosis",
        },
        {
          title: "Multimodal Fake News Detection System",
          type: "HybridModels",
          image: "1000.jpg",
          description:
            "An AI system for detecting misinformation by analyzing both textual and visual features, using NLP transformers and computer vision techniques.",
          techStack: "Python, TensorFlow, PyTorch, BERT, GPT, CNN, ViT, Knowledge Graphs",
          link: "/portfolio/hybridModels/FakeNewsDetection",
        },
      
  ];