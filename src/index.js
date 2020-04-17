import React from 'react';
import ReactDOM from 'react-dom';
import  Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById('app');
ReactDOM.render(<Badge firstName="Manuel" lastName="Goncalves" jobTitle="Frontend Engineer" userName="@manuel28g" />,container);
