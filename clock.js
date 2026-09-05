(() => {
  const clocks = document.querySelectorAll('[data-clock]');
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    month: '2-digit', day: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  });
  function updateClock() {
    const now = new Date();
    const parts = Object.fromEntries(formatter.formatToParts(now).map(part => [part.type, part.value]));
    const label = `${parts.month}/${parts.day}/${parts.year} ${parts.hour}:${parts.minute}:${parts.second}${parts.dayPeriod.toLowerCase()}`;
    for (const clock of clocks) {
      clock.textContent = label;
      clock.dateTime = now.toISOString();
    }
  }
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
})();
