(() => {
  const form = document.querySelector('[data-publication-filters]');
  if (!form) return;
  const search = form.querySelector('#publication-search');
  const topic = form.querySelector('#publication-topic');
  const openOnly = form.querySelector('#publication-open');
  const entries = [...document.querySelectorAll('.publication-entry')];
  const groups = [...document.querySelectorAll('.publication-year')];
  const count = document.querySelector('#publication-count');
  const empty = document.querySelector('#publication-empty');
  form.hidden = false;
  document.querySelector('[data-reset-publications]').hidden = false;
  const normalise = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const parameters = new URLSearchParams(window.location.search);
  if ([...topic.options].some(option => option.value === parameters.get('topic'))) {
    topic.value = parameters.get('topic');
  }
  search.value = parameters.get('q') || '';
  openOnly.checked = parameters.get('open') === '1';
  function filter(updateUrl = true) {
    const words = normalise(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const matches = words.every(word => normalise(entry.dataset.search).includes(word)) &&
        (!topic.value || JSON.parse(entry.dataset.topics).includes(topic.value)) &&
        (!openOnly.checked || entry.dataset.open === 'true');
      entry.hidden = !matches;
      if (matches) visible++;
    }
    groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.publication-entry')].some(entry => !entry.hidden); });
    count.textContent = `${visible} of ${entries.length} articles`;
    empty.hidden = visible !== 0;
    if (updateUrl) {
      const url = new URL(window.location.href);
      [['q', search.value.trim()], ['topic', topic.value], ['open', openOnly.checked ? '1' : '']].forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
      });
      window.history.replaceState(null, '', url);
    }
  }
  form.addEventListener('input', () => filter());
  form.addEventListener('change', () => filter());
  form.addEventListener('submit', event => { event.preventDefault(); filter(); });
  document.querySelector('[data-reset-publications]').addEventListener('click', () => {
    form.reset(); search.value = ''; topic.value = ''; openOnly.checked = false; filter(); search.focus();
  });
  filter(false);
})();
