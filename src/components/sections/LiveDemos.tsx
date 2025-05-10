/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { demoPages } from "../../routes/demoPages";

const LiveDemos = () => {
  return (
    <>
      <ul className="list-disc list-inside text-gray-700 text-sm">
        {demoPages.map(({ title, path, implemented }: any) => (
          <li key={title}>
            {!implemented ? (
              <span className="text-gray-400">{`${title} (Coming Soon)`}</span>
            ) : (
              <Link to={path} className="text-blue-600 hover:underline">
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LiveDemos;
