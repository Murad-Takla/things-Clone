function IconToday(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#FFD402"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M24 9l-8-1-4-8-4 8-8 1 6 6-1 9 7-4 7 4-1-9z"></path>
      <path
        d="M22.924 9.37l-5.278 5.276-.17.17.027.24.891 8.022-6.146-3.512-.248-.142-.248.142-6.146 3.512.89-8.023.027-.239-.17-.17L1.077 9.37l6.986-.873.266-.033.12-.24L12 1.119l3.553 7.106.12.239.265.033 6.986.873z"
        className="icon-today__border"
      ></path>
    </svg>
  );
}

export default IconToday;
