-- select CityId,
-- StateId,
-- CityName

-- from tblcitymst

select tc.CityId,tc.StateId,tc.CityName,ts.StateName from 
tblcitymst as tc left join TblStateMst as ts on ts.StateId = tc.StateId