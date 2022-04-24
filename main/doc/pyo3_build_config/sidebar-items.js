initSidebarItems({"enum":[["BuildFlag",""],["PythonImplementation",""]],"fn":[["add_extension_module_link_args","Adds linker arguments (for macOS) suitable for PyO3’s `extension-module` feature."],["cross_compiling","Detect whether we are cross compiling and return an assembled CrossCompileConfig if so."],["cross_compiling_from_to","Detect whether we are cross compiling and return an assembled CrossCompileConfig if so."],["find_all_sysconfigdata","Finds `_sysconfigdata*.py` files for detected Python interpreters."],["get","Loads the configuration determined from the build environment."],["parse_sysconfigdata","Parse sysconfigdata file"],["use_pyo3_cfgs","Adds all the `#[cfg]` flags to the current compilation."]],"struct":[["BuildFlags","A list of python interpreter compile-time preprocessor defines that we will pick up and pass to rustc via `--cfg=py_sys_config={varname}`; this allows using them conditional cfg attributes in the .rs files, so"],["CrossCompileConfig","Configuration needed by PyO3 to cross-compile for a target platform."],["InterpreterConfig","Configuration needed by PyO3 to build for the correct Python implementation."],["PythonVersion",""],["Triple","A target “triple”. Historically such things had three fields, though they’ve added additional fields over time."]]});