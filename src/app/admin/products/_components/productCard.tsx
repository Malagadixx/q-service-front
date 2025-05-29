type Props = {
  name: string;
  description: string;
  imageUrl: string;
};

export function ProductCard({ name, description, imageUrl }: Props) {
  return (
    <div className="flex items-start space-x-4 w-full max-w-[500px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
