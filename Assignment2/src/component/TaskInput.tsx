import { useState } from 'react';

type Props = {
  onAdd: (title: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return; //  reject empty
    onAdd(trimmed);
    setText(''); // clear only if valid
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="task-input-container" onSubmit={handleAdd}>
      <input
        className="task-input"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button type="submit" className="add-btn">
        <span>+</span> Add Task
      </button>
    </form>
  );
}