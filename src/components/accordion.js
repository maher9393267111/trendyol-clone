import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const Accordion = ({children,title}) => {
    return (
       
<div className=' text-xl'>
<Collapse

style={{fontSize:'19px'}}
expandIconPosition="right"

ghost={true}
bordered={false} defaultActiveKey={['1']}>
    <Panel header={title} key="1">
      
{children}


    </Panel>
    
    
  </Collapse>
</div>


    );
}

export default Accordion;
