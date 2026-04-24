const cohortDate = new Date('2026-07-01T15:00:00Z');
const countdownEl = document.querySelector('#countdown');
const yearEl = document.querySelector('#year');

yearEl.textContent = new Date().getUTCFullYear();

const renderCountdown = () => {
  const now = new Date();
  const diff = cohortDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdownEl.textContent = 'Cohort is now live';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days.toString().padStart(2, '0')}d : ${hours
    .toString()
    .padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds
    .toString()
    .padStart(2, '0')}s`;
};

renderCountdown();
setInterval(renderCountdown, 1000);
