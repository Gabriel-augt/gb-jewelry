interface CategoryButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryButton({ label, isActive, onClick }: CategoryButtonProps) {
  return (
    <li>
      <button onClick={onClick}
      className={`px-3 py-1 transition-all rounded-md cursor-pointer
        ${isActive ? "bg-black text-white" : "hover:text-gray-500"}`}>
        {label}
      </button>
    </li>
  );
}
