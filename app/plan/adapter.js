import ApplicationAdapter from 'trip-planner-app/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true });
    let parentId = serialized.trip_id;
    let url = `${api}/trips/${parentId}/plans`;
    let data = { plan: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
