import React, { memo, useState } from 'react'

interface GreetProps {
  name: string;
}

const Greet: React.FC<{name: string}> = props => {
  console.log('Greet render');
  const [count, setCount] = useState<string | number>(0);
  const [obj, setObj] = useState({
    name: 'amy'
  })
  return (
    <div>
      hi~{props.name} {count} {obj.name}
      <div>
        {/* ✅普通函数组件，可以实现state不更新时不重复渲染, 基本类型传变量传count||0都可以 */}
        <button onClick={(): void => setCount('0')}>change Greet count</button>
        {/* 🟡引用类型传obj可以，传{name: 'amy'会重复渲染} */}
        <button onClick={(): void => setObj(obj)}>change Greet obj</button>
      </div>
    </div>
  );
};

const Greet1 = memo((props: GreetProps) => {
  console.log('Greet1 render');
  return (
    <div>hi~{props.name}</div>
  );
});

const Index3 = () => {
  const [name, setName] = useState('amy');

  const [count, setCount] = useState(0);

  return (
    <div>
      Index3 count: {count} name: {name}
      <div><button onClick={(): void => setCount(count + 1)}>changeCount</button></div>
      <div><button onClick={(): void => setName('rouzip')}>changeName</button></div>
      <Greet name={name} />
      {/* <Greet1 name={name} /> */}
    </div>
  );
};

/**
 * memo: PureComponent 的替代方案
 */
export default Index3;