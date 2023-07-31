-- select 
-- CollegeId,
-- CollegeName,
-- CityId,
-- StateId from TblCollegeMst
select
  tclg.CollegeName,
  tclg.CollegeId,
  ts.StateName,
  ts.StateId,
  tc.CityName,
  tc.CityId
from
  TblCollegeMst as tclg
  left join TblStateMst as ts on ts.StateId = tclg.StateId
  left join tblcitymst as tc on tc.CityId = tclg.CityId