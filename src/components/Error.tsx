import { AlertTriangle } from 'lucide-react';

export default function Error({ msg }: { msg: string }) {
  return (
    <div className="w-full flex-col h-[520px] space-y-4 flex items-center justify-center">
      <AlertTriangle size={50} className="text-gray-600" />
      <span className="text-center text-gray-800 w-2/3 font-light">
        {msg.length > 0 ? msg : 'Lütfen internet bağlantınızı kontrol ediniz.'}
      </span>
    </div>
  );
}
