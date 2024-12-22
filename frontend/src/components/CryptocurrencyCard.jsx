import { Card, Space } from 'antd';
function CryptocurrencyCard(props){
    const {currency} = props
    return(
        <div>
            <Space direction="vertical" size={16}>
                <Card
                    title={
                        <div className='flex items-center gap-3'>
                            <img src= {`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}></img>
                            <span>{currency.name}</span>
                        </div>
                    }
                    style={{
                    width: 300,
                    }}
                >
                    <p>Текущая цена: {parseFloat(currency.quote.USD.price).toFixed(4)} $</p>
                    <p>Изменение цены за 24ч: {parseFloat(currency.quote.USD.percent_change_24h).toFixed(2)}%</p>
                    <p>Текущая капитализация: {`${Math.round(currency.quote.USD.market_cap / 1000000000 * 100) / 100}B $`}</p>
                </Card>
            </Space>
        </div>
    );
}

export default CryptocurrencyCard