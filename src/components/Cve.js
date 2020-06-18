import React from 'react';
import {Card} from 'react-bootstrap';
import { getCves } from '../data/CveType';

const getDanger = score => {
  if (score < 4) {
    return 'Low';
  } else if (score < 7) {
    return 'Medium';
  } else {
    return 'High';
  }
};

export const Cve = () => (
  <>
   <h1 className="text-white logo-text">CVE</h1>
    {
      getCves().map((cveItem, key) => (
        <div className='py-3'>
          <Card key={key}>
            <Card.Header>{cveItem.title} - CVE-{cveItem.number}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div dangerouslySetInnerHTML={{__html: cveItem.description}}/>
                <b className='d-block'>
                  Score : { getDanger(cveItem.score) } ({ cveItem.score })
                </b>
                <p>Date : {cveItem.date}</p>
                <footer className="blockquote-footer">
                  Category : <cite title="Source Title">{ cveItem.category }</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      ))
    }
  </>
);
