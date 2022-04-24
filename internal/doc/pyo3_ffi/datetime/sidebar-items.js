initSidebarItems({"constant":[["_PyDateTime_DATETIME_DATASIZE",""],["_PyDateTime_DATE_DATASIZE",""],["_PyDateTime_TIME_DATASIZE",""]],"fn":[["PyDateTimeAPI","Returns a pointer to a `PyDateTime_CAPI` instance"],["PyDateTime_Check","Check if `op` is a `PyDateTimeAPI.DateTimeType` or subtype."],["PyDateTime_CheckExact","Check if `op`’s type is exactly `PyDateTimeAPI.DateTimeType`."],["PyDateTime_DATE_GET_FOLD","Retrieve the fold component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 1]`"],["PyDateTime_DATE_GET_HOUR","Retrieve the hour component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 23]`"],["PyDateTime_DATE_GET_MICROSECOND","Retrieve the microsecond component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 999999]`"],["PyDateTime_DATE_GET_MINUTE","Retrieve the minute component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 59]`"],["PyDateTime_DATE_GET_SECOND","Retrieve the second component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 59]`"],["PyDateTime_DATE_GET_TZINFO","Retrieve the tzinfo component of a `PyDateTime_DateTime`. Returns a pointer to a `PyObject` that should be either NULL or an instance of a `datetime.tzinfo` subclass."],["PyDateTime_DELTA_GET_DAYS","Retrieve the days component of a `PyDateTime_Delta`."],["PyDateTime_DELTA_GET_MICROSECONDS","Retrieve the seconds component of a `PyDateTime_Delta`."],["PyDateTime_DELTA_GET_SECONDS","Retrieve the seconds component of a `PyDateTime_Delta`."],["PyDateTime_FromTimestamp",""],["PyDateTime_GET_DAY","Retrieve the day component of a `PyDateTime_Date` or `PyDateTime_DateTime`. Returns a signed integer in the interval `[1, 31]`."],["PyDateTime_GET_MONTH","Retrieve the month component of a `PyDateTime_Date` or `PyDateTime_DateTime`. Returns a signed integer in the range `[1, 12]`."],["PyDateTime_GET_YEAR","Retrieve the year component of a `PyDateTime_Date` or `PyDateTime_DateTime`. Returns a signed integer greater than 0."],["PyDateTime_IMPORT","Populates the `PyDateTimeAPI` object"],["PyDateTime_TIME_GET_FOLD","Retrieve the fold component of a `PyDateTime_Time`. Returns a signed integer in the interval `[0, 1]`"],["PyDateTime_TIME_GET_HOUR","Retrieve the hour component of a `PyDateTime_Time`. Returns a signed integer in the interval `[0, 23]`"],["PyDateTime_TIME_GET_MICROSECOND","Retrieve the microsecond component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 999999]`"],["PyDateTime_TIME_GET_MINUTE","Retrieve the minute component of a `PyDateTime_Time`. Returns a signed integer in the interval `[0, 59]`"],["PyDateTime_TIME_GET_SECOND","Retrieve the second component of a `PyDateTime_DateTime`. Returns a signed integer in the interval `[0, 59]`"],["PyDateTime_TIME_GET_TZINFO","Retrieve the tzinfo component of a `PyDateTime_Time`. Returns a pointer to a `PyObject` that should be either NULL or an instance of a `datetime.tzinfo` subclass."],["PyDateTime_TimeZone_UTC",""],["PyDate_Check","Type Check macros"],["PyDate_CheckExact","Check if `op`’s type is exactly `PyDateTimeAPI.DateType`."],["PyDate_FromTimestamp",""],["PyDelta_Check","Check if `op` is a `PyDateTimeAPI.DetaType` or subtype."],["PyDelta_CheckExact","Check if `op`’s type is exactly `PyDateTimeAPI.DeltaType`."],["PyTZInfo_Check","Check if `op` is a `PyDateTimeAPI.TZInfoType` or subtype."],["PyTZInfo_CheckExact","Check if `op`’s type is exactly `PyDateTimeAPI.TZInfoType`."],["PyTime_Check","Check if `op` is a `PyDateTimeAPI.TimeType` or subtype."],["PyTime_CheckExact","Check if `op`’s type is exactly `PyDateTimeAPI.TimeType`."]],"macro":[["_PyDateTime_GET_FOLD",""],["_PyDateTime_GET_HOUR",""],["_PyDateTime_GET_MICROSECOND",""],["_PyDateTime_GET_MINUTE",""],["_PyDateTime_GET_SECOND",""],["_PyDateTime_GET_TZINFO",""],["_access_delta_field",""],["_access_field",""]],"static":[["PyDateTimeAPI_impl",""]],"struct":[["PyDateTimeAPISingleton",""],["PyDateTime_BaseDateTime","Structure representing a `datetime.datetime` without a `tzinfo` member."],["PyDateTime_BaseTime","Structure representing a `datetime.time` without a `tzinfo` member."],["PyDateTime_CAPI",""],["PyDateTime_Date","Structure representing a `datetime.date`"],["PyDateTime_DateTime","Structure representing a `datetime.datetime`."],["PyDateTime_Delta","Structure representing a `datetime.timedelta`."],["PyDateTime_Time","Structure representing a `datetime.time`."]]});