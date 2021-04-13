import React, { useEffect, useState } from "react";
import * as Random from "random-name";

interface IList {
  id: string,
  title: string
}

interface ITestProps {
  data: IList[]
}


const TestListItem = (props: any) => {
  const { id, title } = props;

  useEffect(() => {
    console.log("Item changed is:", id);
  }, [props.title])

  return (
    <>
      <div role="listitem" id={id}>{title}</div>
    </>
  )
}

const initialData: IList[] = [
  {
    id: "1",
    title: Random.first()
  },
  {
    id: "2",
    title: "Two"
  },
  {
    id: "3",
    title: "Three"
  },
  {
    id: "4",
    title: "four"
  }
];

const TestmultipleProps = () => {
  const [data,setData] = useState(initialData);

  useEffect(() => {
    console.log("TestmultipleProps re-rendered");
  },[data])
  const clickHandler = () => {
    const res = [...data];
    res[1].title = Random.middle();
    setData(res);
  }

  return (
    <>
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
      <DisplayContent data={data} />
    </>
  )

}

const DisplayContent: React.FC<ITestProps> = (props: ITestProps) => {
  const { data } = props;

  useEffect(() => {
    console.log("re-rendered DisplayContent");
  },[])
  const items = data.map((item: IList) => {
    return <TestListItem id={item.id} title={item.title} />
  });

  return (
    <div>
      This is list of items:
      <div>
        {items}
      </div>
    </div>
  )
}

export default TestmultipleProps