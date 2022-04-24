window.BENCHMARK_DATA = {
  "lastUpdate": 1650797256345,
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
    ],
    "pytest-bench": [
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
        "date": 1650797253768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 2695858.91095246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017594166528438141",
            "extra": "mean: 370.9392935725613 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 5882801.894583991,
            "unit": "iter/sec",
            "range": "stddev: 4.008398489107515e-7",
            "extra": "mean: 169.98702623670687 nsec\nrounds: 59877"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 6965270.21625529,
            "unit": "iter/sec",
            "range": "stddev: 1.866787333335401e-7",
            "extra": "mean: 143.569447982989 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 8457233.212238437,
            "unit": "iter/sec",
            "range": "stddev: 2.6283544152437345e-7",
            "extra": "mean: 118.24197996017801 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 2706783.743224938,
            "unit": "iter/sec",
            "range": "stddev: 9.385579850623219e-7",
            "extra": "mean: 369.4421479008654 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 1807495.2159467884,
            "unit": "iter/sec",
            "range": "stddev: 0.000001112963651565525",
            "extra": "mean: 553.2518101167947 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 2436094.541231304,
            "unit": "iter/sec",
            "range": "stddev: 9.592734472670777e-7",
            "extra": "mean: 410.49309994887284 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 1594310.0131342541,
            "unit": "iter/sec",
            "range": "stddev: 6.522462903033563e-7",
            "extra": "mean: 627.2305836141837 nsec\nrounds: 47617"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 1641367.1201238204,
            "unit": "iter/sec",
            "range": "stddev: 6.313615352887853e-7",
            "extra": "mean: 609.2482222530213 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 1486670.2792160814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015591477722007535",
            "extra": "mean: 672.6441054080216 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 1499829.9548572113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013855453600981515",
            "extra": "mean: 666.7422508541374 nsec\nrounds: 76331"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 1417271.4337365692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013574981151649817",
            "extra": "mean: 705.5811443002543 nsec\nrounds: 67115"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 1871810.4491131636,
            "unit": "iter/sec",
            "range": "stddev: 7.725381394102054e-7",
            "extra": "mean: 534.2421293106277 nsec\nrounds: 94331"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 3281178.837754818,
            "unit": "iter/sec",
            "range": "stddev: 7.115994739590145e-7",
            "extra": "mean: 304.7685144416757 nsec\nrounds: 86949"
          }
        ]
      }
    ]
  }
}