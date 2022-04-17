import { data } from './TestItem/testData';

import SortableList from './lib/SortableList';
import TestItem from './TestItem/TestItem';

const App = () => {
  const onDropItem = (newListData) => {
    console.log(newListData);
  };

  const onClickItem = (index) => {
    alert(index);
  };

  return (
    <SortableList
      data={data}
      renderItem={(item, index) => <TestItem data={item} index={index} />}
      onDropItem={onDropItem}
      onClickItem={onClickItem}
    />
  );
};

export default App;
