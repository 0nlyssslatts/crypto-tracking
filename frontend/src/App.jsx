import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Menu, Spin } from 'antd';
import CryptocurrencyCard from './components/CryptocurrencyCard';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);


  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(resp => {
      const currenciesResp = resp.data;
      const menuItems = [
        {
          key: 'g1',
          label:'Список криптовалют',
          type: 'group',
          children: currenciesResp.map(c => {
            return {key: c.id, label: c.name}
          }),
        },
      ];
      setCurrencies(menuItems)
    });
  }

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(resp => {
      console.log(resp.data)
      setCurrencyData(resp.data)
    })
  }

  useEffect(() => {
    fetchCurrencies()
  }, []);

  useEffect(() => {
    setCurrencyData(null)
    fetchCurrency()
  }, [currencyId]);

  
  const onClick = (e) => {
    console.log('click ', e);
    setCurrencyId(e.key)
  };

  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className='h-screen overflow-scroll'
      />
      <div className="mx-auto my-auto">
        {currencyData ? <CryptocurrencyCard currency = {currencyData}/> : <Spin size='large'/>}
      </div>
    </div>
  );
};
export default App;