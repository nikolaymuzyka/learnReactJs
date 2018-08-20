import React from 'react';
import {render} from 'react-dom';
import Article from './Article';
import {normalizedComments} from './fixtures';




render(<Article article={normalizedComments[0]} />, document.getElementById('container'));
