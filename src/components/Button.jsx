function Button({ onClick, text }) {
  return (
    <button
      className="rounded bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-600 select-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
