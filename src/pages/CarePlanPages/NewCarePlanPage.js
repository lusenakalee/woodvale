import React from "react";
import CarePlanForm from "../../components/CarePlanComps/CarePlanForm";

function NewCarePlanPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <CarePlanForm method="post" title="New Care Plan" />
      </div>
    </main>
  );
}

export default NewCarePlanPage;
