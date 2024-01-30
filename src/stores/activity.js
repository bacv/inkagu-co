import { defineStore } from 'pinia';

export const useDataRecordsStore = defineStore('activity', {
  state: () => ({
    dataRecords: [],
  }),
  actions: {
    async fetchData() {
      this.dataRecords = [dataRecordExample];
    },
  },
});

var dataRecordExample = {
    "id": 123,
    "title": "Sample Data Record",
    "description": "This is a sample description for the data record.",
    "tags": ["tag1", "tag2", "tag3"],
    "link": "https://example.com",
    "extended": {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    },
    "hash": "abc123hash",
    "origin_timestamp": 161803398874989,
    "pull_timestamp": 161803399874989
}
