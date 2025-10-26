import qs from 'query-string';

export function getSearchObj() {
  const search = typeof window !== 'undefined' && window.location.search;
  const query = qs.parse(search);
  query.user = query.user || 'user';

  return query || {};
}