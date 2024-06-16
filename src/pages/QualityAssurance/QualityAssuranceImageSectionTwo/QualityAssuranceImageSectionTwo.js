import React from 'react';
import '../QualityAssuranceImageSectionOne/QualityAssuranceImageSectionOne.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useRef, useEffect, useState } from 'react';


const QualityAssuranceImageSectionOne = () => {
  const [isQAScope1, setIsQAScope1] = useState(false);
  const [isQAScope2, setIsQAScope2] = useState(false);
  const [isQABusiness, setIsQABusiness] = useState(false);
  const [isQAAutomation, setIsQAAutomation] = useState(false);
  const [isSoftwareWorksoft, setIsSoftwareWorksoft] = useState(false);
  const [isQAPOC, setIsQAPOC] = useState(false);
  const [isQAFramework, setIsQAFramework] = useState(false);
  const [isTestingServices, setIsTestingServices] = useState(false);
  const [isQATricentis, setIsQATricentis] = useState(false);
  const [isQADelivery, setIsQADelivery] = useState(false);

  const isQAScope1Ref = useRef(null);
  const isQAScope2Ref = useRef(null);
  const isQABusinessRef = useRef(null);
  const isQAAutomationRef = useRef(null);
  const isSoftwareWorksoftRef = useRef(null);
  const isQAPOCRef = useRef(null);
  const isQAFrameworkRef = useRef(null);
  const isTestingServicesRef = useRef(null);
  const isQATricentisRef = useRef(null);
  const isQADeliveryRef = useRef(null);


  useEffect(() => {
    const isQAScope1Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQAScope1) {
          setIsQAScope1(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQAScope2Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQAScope2) {
          setIsQAScope2(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQABusinessObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQABusiness) {
          setIsQABusiness(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQAAutomationObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQAAutomation) {
          setIsQAAutomation(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQAPOCObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQAPOC) {
          setIsQAPOC(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQAFrameworkObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQAFramework) {
          setIsQAFramework(true);
        }
      },
      {
        threshold: 0.5
      }
    );
    
    const isTestingServicesObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isTestingServices) {
          setIsTestingServices(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQATricentisObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQATricentis) {
          setIsQATricentis(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isQADeliveryObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isQADelivery) {
          setIsQADelivery(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    const isSoftwareWorksoftObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isSoftwareWorksoft) {
          setIsSoftwareWorksoft(true);
        }
      },
      {
        threshold: 0.5
      }
    );


    if (isQAScope1Ref.current) {
      isQAScope1Observer.observe(isQAScope1Ref.current);
    }

    if (isQAScope2Ref.current) {
      isQAScope2Observer.observe(isQAScope2Ref.current);
    }

    if (isQABusinessRef.current) {
      isQABusinessObserver.observe(isQABusinessRef.current);
    }

    if (isQAAutomationRef.current) {
      isQAAutomationObserver.observe(isQAAutomationRef.current);
    }

    if (isSoftwareWorksoftRef.current) {
      isSoftwareWorksoftObserver.observe(isSoftwareWorksoftRef.current);
    }

    if (isQAPOCRef.current) {
      isQAPOCObserver.observe(isQAPOCRef.current);
    }

    if (isQAFrameworkRef.current) {
      isQAFrameworkObserver.observe(isQAFrameworkRef.current);
    }

    if (isTestingServicesRef.current) {
      isTestingServicesObserver.observe(isTestingServicesRef.current);
    }

    if (isQATricentisRef.current) {
      isQATricentisObserver.observe(isQATricentisRef.current);
    }

    if (isQADeliveryRef.current) {
      isQADeliveryObserver.observe(isQADeliveryRef.current);
    }



    return () => {
      if (isQAScope1Ref.current) {
        isQAScope1Observer.unobserve(isQAScope1Ref.current);
      }
      if (isQAScope2Ref.current) {
        isQAScope2Observer.unobserve(isQAScope2Ref.current);
      }
      if (isQABusinessRef.current) {
        isQABusinessObserver.unobserve(isQABusinessRef.current);
      }
      if (isQAAutomationRef.current) {
        isQAAutomationObserver.unobserve(isQAAutomationRef.current);
      }
      if (isSoftwareWorksoftRef.current) {
        isSoftwareWorksoftObserver.unobserve(isSoftwareWorksoftRef.current);
      }
      if (isQAPOCRef.current) {
        isQAPOCObserver.unobserve(isQAPOCRef.current);
      }
      if (isQAFrameworkRef.current) {
        isQAFrameworkObserver.unobserve(isQAFrameworkRef.current);
      }
      if (isTestingServicesRef.current) {
        isTestingServicesObserver.unobserve(isTestingServicesRef.current);
      }
      if (isQATricentisRef.current) {
        isQATricentisObserver.unobserve(isQATricentisRef.current);
      }
      if (isQADeliveryRef.current) {
        isQADeliveryObserver.unobserve(isQADeliveryRef.current);
      }
    };

  }, [isQAScope1, isQAScope2, isQABusiness, isQAAutomation, isSoftwareWorksoft, isQAPOC, isQAFramework, isTestingServices, isQATricentis, isQADelivery]);

  return (
    <section className="qa-image-quality-assurance-section">
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title">Scope of Services</p>
      <div ref={isQAScope1Ref} className={isQAScope1 ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-Technology-and-Inovation.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title-no-margin">Scope of Services</p>
      <p className="qa-image-sub-sub-title">Test management tools can facilitate standardization of best practices and methods – both traditional and agile – and HP ALM (Quality Center) is the markets leading tool.</p>
      <div ref={isQAScope2Ref} className={isQAScope2 ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-test-management.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <p className="qa-image-sub-blue-title">Primoris ALM and Test Management capabilities can help your company achieve high levels of quality for your product or service</p>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title-no-margin">Business and operational excellence value map</p>
      <p className="qa-image-sub-sub-title">Test management tools can facilitate standardization of best practices and methods – both traditional and agile – and HP ALM (Quality Center) is the markets leading tool.</p>
      <div ref={isQABusinessRef} className={isQABusiness ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-business.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <p className="qa-image-sub-blue-title">Framework for focusing on quality excellence by targeting the appropriate levers and metrics to drive change</p>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Primoris - Quality Assurance Approach" dividerColor="#000" />
      <p className="qa-image-sub-title">Automation benefits</p>
      <div ref={isQAAutomationRef} className={isQAAutomation ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-automation-benefits.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Software - The Worksoft Solution" dividerColor="#000" />
      <div ref={isSoftwareWorksoftRef} className={isSoftwareWorksoft ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-worksoft.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title">Automated POC proposed – Our Plan</p>
      <div ref={isQAPOCRef} className={isQAPOC ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-poc-proposed.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <p className="qa-image-sub-blue-title">Primoris combines the power of deep functional and industry experties, analytics and optimization sciences and process engineering and advanced digital technologies to deliver inventive solutions</p>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title">Framework</p>
      <div ref={isQAFrameworkRef} className={isQAFramework ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-framework.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Quality Assurance" dividerColor="#000" />
      <p className="qa-image-sub-title-no-margin">Testing Services-Tools-Automation and worksoft</p>
      <p className="qa-image-sub-blue-title">On average, these large SAP customersare obtaining benefits worth $4.02 million annually and reaching break-even in their investment in Worksoft Certify in only 11.9 months. The five year NPV of their investment in Worksoft Certify is approximately $11.46 million!</p>
      <div ref={isTestingServicesRef} className={isTestingServices ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-testing-service.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Primoris - Quality Assurance Approach" dividerColor="#000" />
      <p className="qa-image-sub-title">Software – The Tricentis Solution</p>
      <div ref={isQATricentisRef} className={isQATricentis ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-tricentis.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
      <div style={{ height: '100px' }}></div>
      <SectionTitle title="Primoris - Quality Assurance Approach" dividerColor="#000" />
      <p className="qa-image-sub-title">Delivery Model – Activity Life Cycle</p>
      <div ref={isQADeliveryRef} className={isQADelivery ? "qa-image-circle-container image-transition-bottom" : "qa-image-circle-container"}>
        <img
          src={require('../../../images/qa-delivery-model.png')}
          alt="Quality Assurance Circle"
          className="qa-image-circle-image"
        />
      </div>
    </section>
  );
};

export default QualityAssuranceImageSectionOne;
