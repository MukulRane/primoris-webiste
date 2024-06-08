import React from 'react';
import './TechnologiesMethodsSection.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const technologiesMethodsData = [
  {
    title: 'Statistical Techniques',
    points: [
      'Statistically descriptive',
      'ARIMA ARMA',
      'Bayesian analysis, etc.'
    ]
  },
  {
    title: 'Machine learning techniques Non-NN',
    points: [
      'Algorithms for supervised learning, such as support vector machines, decision trees, and linear and logistic regression',
      'Algorithms for unsupervised learning, such hierarchical and K-means clustering',
      'Techniques for reinforcement learning, including Q-learning, SARSA, and the temporal differences approach'
    ]
  },
  {
    title: 'Deep Learning and Neural Networks',
    points: [
      'Recurrent and convolutional neural networks, including LSTM and GRU Autoencoders',
      'GANs, or generative adversarial networks',
      'DQN, or Deep Q Network',
      'Deep Bayesian learning'
    ]
  }
];

const TechnologiesMethodsSection = () => {
  return (
    <section className="technologies-methods-section">
      <SectionTitle title="Technologies and Methods, We Employ" dividerColor="#000" />
      <p>We use sophisticated machine learning algorithms, such as deep neural networks with 10+ hidden layers, as well as tried-and-true statistical methodologies to uncover the useful insights that your data conceals. Methods we use are as:</p>
      <div className="technologies-methods-cards-container">
        {technologiesMethodsData.map((item, index) => (
          <div className="technologies-methods-card-wrapper" key={index}>
            <div className="technologies-methods-card">
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesMethodsSection;
