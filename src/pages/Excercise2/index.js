/**
 * Excerise 2
 * 
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 03/07/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * + 
 * 
 */
import { useState } from 'react';
import { Accordion, Tab, Tabs } from 'react-bootstrap';

const Excercise2 = () => {

  const data = require('../../data/excercise2.data.json');
  
  const [selected, setSelected] = useState(0);

  return (
    <div className='container p-5'>

      <div id="tab-view">
        <Tabs
            activeKey={selected} 
            onSelect={(k) => setSelected(k)}>
            {data.map((v, i) => (
              <Tab 
                key={i} 
                eventKey={i} 
                title={<b>{v.title}</b>} 
                className="pt-2">
                <div className='card card-body p-4'>
                <div dangerouslySetInnerHTML={{__html: v.content}} />
                </div>
              </Tab>
            ))}
        </Tabs>
        {selected === null && (
          <div className='alert alert-info mt-2'>
            Select tab to view.
          </div>
        )}
      </div>

      <Accordion 
        id="accordion-view"
        activeKey={selected} onSelect={(k) => setSelected(k)}>
        {data.map((v, i) => (
          <Accordion.Item 
            key={i} 
            eventKey={i}>
              <Accordion.Header>
                <b>{v.title}</b>
              </Accordion.Header>
              <Accordion.Body>
                <div dangerouslySetInnerHTML={{__html: v.content}} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
  )
}

export default Excercise2;