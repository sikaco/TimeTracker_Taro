import { Observable } from 'rxjs'
// import { ProjectId } from 'teambition-types'
// import { ProjectSchema, CacheStrategy } from 'teambition-sdk'

// export function getProjectsV2(request: Observable<ProjectSchema[]>, projectIds: ProjectId[]) {
//   return SDK.lift<ProjectSchema>({
//     cacheValidate: CacheStrategy.Cache,
//     tableName: 'Project',
//     request,
//     query: {
//       where: {
//         _id: { $in: projectIds }
//       }
//     },
//     assocFields: {
//       organization: ['_id', 'description', 'isExpired', 'isPublic', 'logo', 'name', 'plan']
//     }
//   })
// }
