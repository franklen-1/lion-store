import { Link } from 'react-router';

// interface Props {
//   // subtitle?: string;
// }

export const CustomLogo = () => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap">
              <img
              src="/logo.png"
              alt="Image"
              className="h-12 w-15"
            />
      </span>
      {/* <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
       
      </p> */}
    </Link>
  );
};
