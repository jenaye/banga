import React from 'react'
import {Card} from 'react-bootstrap'
import { getChalls } from '../data/ChallType';

export const Challenge = () => (
  <>
  <h1 className="text-white logo-text">My Challs</h1>
    {
      getChalls().map((chall, key) => (
        <div className='py-3'>
          <Card key={key}>
            <Card.Header>{chall.eventName} - {chall.name}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div dangerouslySetInnerHTML={{__html: chall.description}}/>
                <b className='d-block'></b>
                <footer className="blockquote-footer">
                  Category : <cite title="Category">{chall.category}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      ))
    }
  </>
);
