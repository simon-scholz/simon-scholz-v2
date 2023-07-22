
interface IWorkRow {
    company: string
    jobDescription: string
    period: string
    current?: boolean
}

const WorkRow = ({company, jobDescription, period, current}: IWorkRow) => {
    return (
      <div className="flex flex-row justify-start align-baseline gap-6 px-4 py-2 w-full rounded-md hover:bg-slate-50 transition-all hover:transition-all hover:cursor-pointer">
        <p className="text-gray-800 font-medium min-w-fit grow-0">{company}</p>
        <p className="overflow-hidden text-gray-200 w-full truncate grow">
          {".".repeat(500)}
        </p>
        <p className="text-gray-600 min-w-fit grow-0">{jobDescription}</p>
        {!current ? (
          <p className="text-slate-400 font-jetbrains w-52 min-w-[128px] pl-2 text-right">
            {period}
          </p>
        ) : (
          <div className="flex flex-row gap-1 items-center min-w-[128px] justify-end">
            <div className="rounded-full h-2 w-2 bg-emerald-400"></div>
            <p className="text-slate-400 font-jetbrains pl-2">current</p>
          </div>
        )}
      </div>
    );
}

export default WorkRow