const TableSkeleton = () => {
    return (
      <>
        {[...Array(3)].map((_, i) => (
          <tr key={i} className="animate-pulse bg-gray-100 dark:bg-gray-800">
            <td className="p-4">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="w-10 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                <div className="w-16 h-3 mt-1 bg-gray-300 rounded"></div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4">
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 flex space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </td>
          </tr>
        ))}
      </>
    );
  };
  
  export default TableSkeleton;
  