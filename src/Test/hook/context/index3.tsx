/**
 * 最简单的使用useContext的例子
 */

import React, { useState, useContext } from 'react';

const CountContext = React.createContext({ count: 0});

const CountConsum2 = () => {
    return (
        <CountContext.Consumer>
            {value => {
                return (
                    <div>
                        CountConsum2: {value.count}
                    </div>
                )
            }}
        </CountContext.Consumer>
    );
};

const CountConsum1 = () => {
    const value = useContext(CountContext);
    return (
        <div>
            CountConsum1: {value.count}
            <CountConsum2 />
        </div>
    );
};

const Index3 = () => {
    const [count, setCount] = useState(0);

    const onChangeCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            count: {count}
            <button onClick={onChangeCount}>onChangeCount</button>
            <CountContext.Provider value={{ count }}>
                <CountConsum1 />
            </CountContext.Provider>
        </div>
    );
};

export default Index3;