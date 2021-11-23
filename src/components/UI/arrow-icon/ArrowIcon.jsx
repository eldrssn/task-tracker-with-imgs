import React from 'react';

export const ArrowIcon = ({ handleSelectToggle }) => {
  return (
    <span onClick={handleSelectToggle}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0.292908L13.3536 3.64646L12.6465 4.35357L10.5 2.20712V9.50001H17.7929L15.6465 7.35357L16.3536 6.64646L19.7071 10L16.3536 13.3536L15.6465 12.6465L17.7929 10.5H10.5V17.7929L12.6465 15.6465L13.3536 16.3536L10 19.7071L6.64646 16.3536L7.35357 15.6465L9.50001 17.7929V10.5H2.20712L4.35357 12.6465L3.64646 13.3536L0.292908 10L3.64646 6.64646L4.35357 7.35357L2.20712 9.50001H9.50001V2.20712L7.35357 4.35357L6.64646 3.64646L10 0.292908Z"
          fill="black"
        />
      </svg>
    </span>
  );
};
