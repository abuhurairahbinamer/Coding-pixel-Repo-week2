import type { Filter } from '../types/types';

type Props = {
  filter: Filter;
  setFilter: (f: Filter) => void;
  total: number;
  active: number;
  completed: number;
};

export default function FilterBar({
  filter,
  setFilter,
  total,
  active,
  completed,
}: Props) {
  // Pre-compute class names
  const allBtnClass = `filter-btn ${filter === 'all' ? 'active' : ''}`;
  const activeBtnClass = `filter-btn ${filter === 'active' ? 'active' : ''}`;
  const completedBtnClass = `filter-btn ${filter === 'completed' ? 'active' : ''}`;

  // Click handlers
  const handleAllClick = () => setFilter('all');
  const handleActiveClick = () => setFilter('active');
  const handleCompletedClick = () => setFilter('completed');

  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        <button className={allBtnClass} onClick={handleAllClick}>
          All <span className="filter-count-badge">{total}</span>
        </button>

        <button className={activeBtnClass} onClick={handleActiveClick}>
          Active <span className="filter-count-badge">{active}</span>
        </button>

        <button className={completedBtnClass} onClick={handleCompletedClick}>
          Completed <span className="filter-count-badge">{completed}</span>
        </button>
      </div>

      <div className="filter-status-indicator">
        Showing: <span>{filter}</span>
      </div>
    </div>
  );
}