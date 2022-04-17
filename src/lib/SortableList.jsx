import { useState, useCallback } from 'react';

import './SortableList.css';

import SortableListItem from './SortableListItem';

const SortableList = ({ data, onDropItem, onClickItem, renderItem }) => {
  const [startIndex, setStartIndex] = useState(null);
  const [listData, setListData] = useState(data);

  const onDragStartItem = (index) => {
    setStartIndex(index);
  };

  const onDrop = useCallback(
    (dropIndex) => {
      const dragItem = listData[startIndex];
      const _listData = [...listData];

      _listData.splice(startIndex, 1);

      const newListData =
        startIndex < dropIndex
          ? [
              ..._listData.slice(0, dropIndex - 1),
              dragItem,
              ..._listData.slice(dropIndex - 1),
            ]
          : [
              ..._listData.slice(0, dropIndex),
              dragItem,
              ..._listData.slice(dropIndex),
            ];

      setListData(newListData);
      onDropItem(newListData);
    },
    [startIndex, listData, onDropItem]
  );

  return (
    <ul className="sortable-list">
      {listData.map((item, index) => (
        <SortableListItem
          key={index}
          index={index}
          draggable={true}
          onDragStartItem={onDragStartItem}
          onDropItem={onDrop}
          onClickItem={onClickItem}
        >
          {renderItem(item, index)}
        </SortableListItem>
      ))}
      <SortableListItem
        key={listData.length}
        index={listData.length}
        draggable={false}
        onDropItem={onDrop}
      />
    </ul>
  );
};

export default SortableList;
