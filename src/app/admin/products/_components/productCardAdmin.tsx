type Props = {
  name: string;
  description: string;
  imagem: string;
};

export function ProductCardAdmin({ name, description, imagem }: Props) {
  return (
    <div className="flex items-start space-x-4 w-full p-4 bg-[#D9D9D9] rounded-lg">
      <img
        src={imagem}
        alt={name}
        className="w-[100px] h-[100px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
