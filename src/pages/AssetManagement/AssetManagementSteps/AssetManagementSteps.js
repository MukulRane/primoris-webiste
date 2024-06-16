import React, { useRef, useEffect, useState } from 'react';
import './AssetManagementSteps.css';

const readinessData = [
  {
    number: 1,
    title: 'Asset cards replication from SAP AM to mAsset ERP (in SAP DMS)',
    description: 'After replication data to the mAsset ERP you can easily distribute your fixed asset cards to unlimited number of inventory lists, to assign those lists to the inventory commission members etc. There is a number of parameters for automating this process on the transaction screen.',
    image: require('../../../images/asset-management-step-1.png')
  },
  {
    number: 2,
    title: 'Data deployment to mobile devices',
    description: 'When everything is ready as described in the previous step, by one click you can easily deploy your data to mobile devices designated for performing the physical check. Based on the customization parameters you can manage the deployment policy (e.g. if all asset cards are deployed to all devices no matter which commission member they are assigned to etc.)',
    image: require('../../../images/asset-management-step-2.png')
  },
  {
    number: 3,
    title: 'Performing physical inventory check',
    description: 'Inventory commission members are performing physical inventory check in this step of the process. Thanks to the easy to use UI and advanced features (e.g. “hands-free optimistic scan” which brings you the ability to set the OK status just by scanning the barcode and/or setting different status and document possible damage by scanning the same code again which opens the full asset card screen) everything goes very fast and it’s possible to check up to 100 items per minute (under optimal conditions).',
    image: require('../../../images/asset-management-step-3.png')
  },
  {
    number: 4,
    title: 'Uploading data from mobile devices to the mAsset ERP',
    description: 'Based on the replication policy in use the data are uploaded to the mAsset ERP for post processing. Replication policies are very flexible – i.e. you can choose the proper way of data replication easily. Note: Being 100% online is just another replication policy – you don’t have to use the offline capability of our solution.',
    image: require('../../../images/asset-management-step-4.png')
  },
  {
    number: 5,
    title: 'Inventory check post-processing',
    description: 'As all the data are back in the mAsset ERP after performing the steps described above, you can easily go through all the finalization steps. It is not necessary for inventory commission members to meet physically. As all the documentation (e.g. photos in case of some type of damage).',
    image: require('../../../images/asset-management-step-5.png')
  }
];

const AssetManagementSteps = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => ({
            ...prev,
            [entry.target.dataset.index]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="asset-readiness-section">
      {readinessData.map((item, index) => (
        <div
          ref={(el) => (itemRefs.current[index] = el)}
          className="asset-readiness-row"
          key={index}
          data-index={index}
        >
          {index % 2 === 0 ? (
            <>
              <div className="asset-readiness-content">
                <div className="title-row">
                  <h2 className="number">{item.number}</h2>
                  <h3 className="title">{item.title}</h3>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
              <div className={`asset-readiness-image ${visibleItems[index] ? 'come-from-right' : ''}`}>
                <img src={item.image} alt={item.title} />
              </div>
            </>
          ) : (
            <>
              <div className={`asset-readiness-image ${visibleItems[index] ? 'come-from-left' : ''}`}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="asset-readiness-content">
                <div className="asset-title-row">
                  <h2 className="number">{item.number}</h2>
                  <h3 className="title">{item.title}</h3>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default AssetManagementSteps;
