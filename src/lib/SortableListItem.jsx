import { useRef } from 'react';

const SortableListItem = ({
  index,
  draggable,
  children,
  onDragStartItem,
  onDropItem,
  onClickItem,
}) => {
  const itemRef = useRef(null);

  const handleDragStartItem = () => {
    itemRef.current.classList.add('dragstart');
    onDragStartItem(index);
  };

  const handleDragEndItem = () => {
    itemRef.current.classList.remove('dragstart');
  };

  const handleDragEnterItem = () => {
    itemRef.current.classList.add('dragover');
  };

  const handleDragLeaveItem = () => {
    itemRef.current.classList.remove('dragover');
  };

  const handleDragOverItem = (event) => {
    event.preventDefault();
  };

  const handleDropItem = () => {
    itemRef.current.classList.remove('dragover');
    onDropItem(index);
  };

  const handleItemClick = () => {
    onClickItem(index);
  };

  return (
    <li
      className="item"
      draggable={draggable ? draggable : false}
      onDragStart={handleDragStartItem}
      onDragEnd={handleDragEndItem}
      onDragEnter={handleDragEnterItem}
      onDragLeave={handleDragLeaveItem}
      onDragOver={handleDragOverItem}
      onDrop={handleDropItem}
      onClick={handleItemClick}
      ref={itemRef}
    >
      {children}
    </li>
  );
};

export default SortableListItem;
