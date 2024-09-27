export default function Card({ children, className }) {
  return (
    <div className={`shadow-md rounded-lg p-6 ${className} text-white`}>
      {children}
    </div>
  );
}
