export default function Toast({ message }) {
  return (
    <div
      className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[100]
                 bg-stone-800 border border-stone-700 text-stone-200
                 text-sm px-5 py-2.5 rounded-full shadow-lg
                 animate-toastIn pointer-events-none"
    >
      {message}
    </div>
  );
}