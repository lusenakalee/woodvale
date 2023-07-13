import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';
import NewLogsForm from '../../components/LogsComps/NewLogsForm';

function EditLogsPage() {
  const log = useRouteLoaderData("log-detail");
  return (
    <NewLogsForm method="patch" log={log}/>
  )
}

export default EditLogsPage