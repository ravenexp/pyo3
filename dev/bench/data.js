window.BENCHMARK_DATA = {
  "lastUpdate": 1650797086798,
  "repoUrl": "https://github.com/ravenexp/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ef9e54e1350ff2a7025907988ee4729bc7b29cc",
          "message": "Merge pull request #2287 from davidhewitt/kill-type-object\n\ncleanup: deprecate PyTypeObject trait",
          "timestamp": "2022-04-23T15:41:51+01:00",
          "tree_id": "0656ba20d47ab250d7429f0734d0652d696f183f",
          "url": "https://github.com/ravenexp/pyo3/commit/8ef9e54e1350ff2a7025907988ee4729bc7b29cc"
        },
        "date": 1650797085248,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82063,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 240461,
            "range": "± 2828",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2761733,
            "range": "± 16475",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4995074,
            "range": "± 138546",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2919212,
            "range": "± 13131",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7596005,
            "range": "± 89463",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13279235,
            "range": "± 71096",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6574884,
            "range": "± 92454",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1848033,
            "range": "± 42944",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1605332,
            "range": "± 46872",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1101786,
            "range": "± 32839",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 958810,
            "range": "± 31686",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4500,
            "range": "± 21318",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2206726,
            "range": "± 19092",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8509583,
            "range": "± 82265",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3801776,
            "range": "± 23588",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6042591,
            "range": "± 34231",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1269114,
            "range": "± 4273",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1574447,
            "range": "± 61758",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 829534,
            "range": "± 3738",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 710821,
            "range": "± 969",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}