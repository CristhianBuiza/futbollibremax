// src/components/SkeletonItem.jsx
import '../Agenda.css';

const SkeletonItem = () => {
  return (
    <div className="skeleton-item p-2 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center cursor-pointer justify-between">
        <div className="flex items-center">
          <div className="skeleton-time w-12 text-center font-bold text-gray-700"></div>
          <div className="skeleton-img ml-2"></div>
          <div className="skeleton-text flex-1 ml-4 text-left font-medium text-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonItem;
