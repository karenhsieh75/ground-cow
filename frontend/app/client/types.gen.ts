// This file is auto-generated by @hey-api/openapi-ts

export type AlertCreate = {
    event_id: number;
    zone_id: number;
    alert_alert_time: string;
    alert_state?: AlertState;
    alert_is_suppressed_by?: number | null;
};

export type AlertPublic = {
    event_id: number;
    zone_id: number;
    alert_alert_time: string;
    alert_state?: AlertState;
    alert_is_suppressed_by?: number | null;
    alert_id: number;
    alert_created_at: string;
};

export type AlertState = 'active' | 'resolved' | 'closed';

export type AlertUpdate = {
    alert_state?: AlertState | null;
    alert_is_suppressed_by?: number | null;
};

export type AlertsPublic = {
    data: Array<AlertPublic>;
};

export type EarthquakeCreate = {
    earthquake_magnitude: number;
    earthquake_occurred_at: string;
    earthquake_source: string;
    earthquake_id: number;
};

export type EarthquakePublic = {
    earthquake_magnitude: number;
    earthquake_occurred_at: string;
    earthquake_source: string;
    earthquake_id: number;
    earthquake_created_at: string;
};

export type EarthquakeUpdate = {
    earthquake_magnitude?: number | null;
    earthquake_occurred_at?: string | null;
    earthquake_source?: string | null;
};

export type EarthquakesPublic = {
    data: Array<EarthquakePublic>;
};

export type EventCreate = {
    event_intensity: number;
    event_severity?: EventSeverity;
    earthquake_id: number;
    zone_id: number;
};

export type EventPublic = {
    event_intensity: number;
    event_severity?: EventSeverity;
    event_id: number;
    earthquake_id: number;
    zone_id: number;
    event_created_at: string;
};

export type EventSeverity = 'NA' | 'L1' | 'L2';

export type EventUpdate = {
    event_intensity?: number | null;
    event_severity?: EventSeverity | null;
};

export type EventsPublic = {
    data: Array<EventPublic>;
};

export type HttpValidationError = {
    detail?: Array<ValidationError>;
};

export type ReportCreate = {
    alert_id?: number | null;
    user_id?: number | null;
    report_action_flag: boolean;
    report_damage_flag: boolean;
    report_factory_zone?: number | null;
    report_reported_at: string;
};

export type ReportPublic = {
    alert_id?: number | null;
    user_id?: number | null;
    report_action_flag: boolean;
    report_damage_flag: boolean;
    report_factory_zone?: number | null;
    report_reported_at: string;
    report_id: number;
    report_created_at: string;
};

export type ReportUpdate = {
    alert_id?: number | null;
    user_id?: number | null;
    report_action_flag?: boolean | null;
    report_damage_flag?: boolean | null;
    report_factory_zone?: number | null;
    report_reported_at?: string | null;
};

export type ReportsPublic = {
    data: Array<ReportPublic>;
};

export type UserCreate = {
    user_email: string;
    user_name: string;
    user_role?: UserRole;
};

export type UserPublic = {
    user_email: string;
    user_name: string;
    user_role?: UserRole;
    user_id: number;
    user_created_at: string;
};

export type UserRole = 'admin' | 'control' | 'operator';

export type UserUpdate = {
    user_email?: string | null;
    user_name?: string | null;
    user_role?: UserRole | null;
};

export type UsersPublic = {
    data: Array<UserPublic>;
};

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

export type ZoneCreate = {
    zone_name?: string | null;
    zone_note: string;
    zone_regions: string;
};

export type ZonePublic = {
    zone_name?: string | null;
    zone_note: string;
    zone_regions: string;
    zone_id: number;
    zone_created_at: string;
};

export type ZoneUpdate = {
    zone_name?: string | null;
    zone_note?: string | null;
    zone_regions?: string | null;
};

export type ZonesPublic = {
    data: Array<ZonePublic>;
};

export type ListUsersUserGetData = {
    body?: never;
    path?: never;
    query?: {
        offset?: number;
        limit?: number;
        user_role?: string | null;
    };
    url: '/user/';
};

export type ListUsersUserGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ListUsersUserGetError = ListUsersUserGetErrors[keyof ListUsersUserGetErrors];

export type ListUsersUserGetResponses = {
    /**
     * Successful Response
     */
    200: UsersPublic;
};

export type ListUsersUserGetResponse = ListUsersUserGetResponses[keyof ListUsersUserGetResponses];

export type CreateUserUserPostData = {
    body: UserCreate;
    path?: never;
    query?: never;
    url: '/user/';
};

export type CreateUserUserPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateUserUserPostError = CreateUserUserPostErrors[keyof CreateUserUserPostErrors];

export type CreateUserUserPostResponses = {
    /**
     * Successful Response
     */
    200: UserPublic;
};

export type CreateUserUserPostResponse = CreateUserUserPostResponses[keyof CreateUserUserPostResponses];

export type DeleteUserUserUserIdDeleteData = {
    body?: never;
    path: {
        user_id: number;
    };
    query?: never;
    url: '/user/{user_id}';
};

export type DeleteUserUserUserIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteUserUserUserIdDeleteError = DeleteUserUserUserIdDeleteErrors[keyof DeleteUserUserUserIdDeleteErrors];

export type DeleteUserUserUserIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteUserUserUserIdDeleteResponse = DeleteUserUserUserIdDeleteResponses[keyof DeleteUserUserUserIdDeleteResponses];

export type GetUserUserUserIdGetData = {
    body?: never;
    path: {
        user_id: number;
    };
    query?: never;
    url: '/user/{user_id}';
};

export type GetUserUserUserIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetUserUserUserIdGetError = GetUserUserUserIdGetErrors[keyof GetUserUserUserIdGetErrors];

export type GetUserUserUserIdGetResponses = {
    /**
     * Successful Response
     */
    200: UserPublic;
};

export type GetUserUserUserIdGetResponse = GetUserUserUserIdGetResponses[keyof GetUserUserUserIdGetResponses];

export type UpdateUserUserUserIdPatchData = {
    body: UserUpdate;
    path: {
        user_id: number;
    };
    query?: never;
    url: '/user/{user_id}';
};

export type UpdateUserUserUserIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateUserUserUserIdPatchError = UpdateUserUserUserIdPatchErrors[keyof UpdateUserUserUserIdPatchErrors];

export type UpdateUserUserUserIdPatchResponses = {
    /**
     * Successful Response
     */
    200: UserPublic;
};

export type UpdateUserUserUserIdPatchResponse = UpdateUserUserUserIdPatchResponses[keyof UpdateUserUserUserIdPatchResponses];

export type ListEarthquakesEarthquakeGetData = {
    body?: never;
    path?: never;
    query?: {
        offset?: number;
        limit?: number;
        sort_by?: string | null;
        order?: 'asc' | 'desc';
    };
    url: '/earthquake/';
};

export type ListEarthquakesEarthquakeGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ListEarthquakesEarthquakeGetError = ListEarthquakesEarthquakeGetErrors[keyof ListEarthquakesEarthquakeGetErrors];

export type ListEarthquakesEarthquakeGetResponses = {
    /**
     * Successful Response
     */
    200: EarthquakesPublic;
};

export type ListEarthquakesEarthquakeGetResponse = ListEarthquakesEarthquakeGetResponses[keyof ListEarthquakesEarthquakeGetResponses];

export type CreateEarthquakeEarthquakePostData = {
    body: EarthquakeCreate;
    path?: never;
    query?: never;
    url: '/earthquake/';
};

export type CreateEarthquakeEarthquakePostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateEarthquakeEarthquakePostError = CreateEarthquakeEarthquakePostErrors[keyof CreateEarthquakeEarthquakePostErrors];

export type CreateEarthquakeEarthquakePostResponses = {
    /**
     * Successful Response
     */
    200: EarthquakePublic;
};

export type CreateEarthquakeEarthquakePostResponse = CreateEarthquakeEarthquakePostResponses[keyof CreateEarthquakeEarthquakePostResponses];

export type DeleteEarthquakeEarthquakeEarthquakeIdDeleteData = {
    body?: never;
    path: {
        earthquake_id: number;
    };
    query?: never;
    url: '/earthquake/{earthquake_id}';
};

export type DeleteEarthquakeEarthquakeEarthquakeIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteEarthquakeEarthquakeEarthquakeIdDeleteError = DeleteEarthquakeEarthquakeEarthquakeIdDeleteErrors[keyof DeleteEarthquakeEarthquakeEarthquakeIdDeleteErrors];

export type DeleteEarthquakeEarthquakeEarthquakeIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteEarthquakeEarthquakeEarthquakeIdDeleteResponse = DeleteEarthquakeEarthquakeEarthquakeIdDeleteResponses[keyof DeleteEarthquakeEarthquakeEarthquakeIdDeleteResponses];

export type GetEarthquakeEarthquakeEarthquakeIdGetData = {
    body?: never;
    path: {
        earthquake_id: number;
    };
    query?: never;
    url: '/earthquake/{earthquake_id}';
};

export type GetEarthquakeEarthquakeEarthquakeIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetEarthquakeEarthquakeEarthquakeIdGetError = GetEarthquakeEarthquakeEarthquakeIdGetErrors[keyof GetEarthquakeEarthquakeEarthquakeIdGetErrors];

export type GetEarthquakeEarthquakeEarthquakeIdGetResponses = {
    /**
     * Successful Response
     */
    200: EarthquakePublic;
};

export type GetEarthquakeEarthquakeEarthquakeIdGetResponse = GetEarthquakeEarthquakeEarthquakeIdGetResponses[keyof GetEarthquakeEarthquakeEarthquakeIdGetResponses];

export type UpdateEarthquakeEarthquakeEarthquakeIdPatchData = {
    body: EarthquakeUpdate;
    path: {
        earthquake_id: number;
    };
    query?: never;
    url: '/earthquake/{earthquake_id}';
};

export type UpdateEarthquakeEarthquakeEarthquakeIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateEarthquakeEarthquakeEarthquakeIdPatchError = UpdateEarthquakeEarthquakeEarthquakeIdPatchErrors[keyof UpdateEarthquakeEarthquakeEarthquakeIdPatchErrors];

export type UpdateEarthquakeEarthquakeEarthquakeIdPatchResponses = {
    /**
     * Successful Response
     */
    200: EarthquakePublic;
};

export type UpdateEarthquakeEarthquakeEarthquakeIdPatchResponse = UpdateEarthquakeEarthquakeEarthquakeIdPatchResponses[keyof UpdateEarthquakeEarthquakeEarthquakeIdPatchResponses];

export type ListAlertsAlertGetData = {
    body?: never;
    path?: never;
    query?: {
        offset?: number;
        limit?: number;
        alert_state?: string | null;
        zone_id?: number | null;
        sort_by?: string | null;
        order?: 'asc' | 'desc';
    };
    url: '/alert/';
};

export type ListAlertsAlertGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ListAlertsAlertGetError = ListAlertsAlertGetErrors[keyof ListAlertsAlertGetErrors];

export type ListAlertsAlertGetResponses = {
    /**
     * Successful Response
     */
    200: AlertsPublic;
};

export type ListAlertsAlertGetResponse = ListAlertsAlertGetResponses[keyof ListAlertsAlertGetResponses];

export type CreateAlertAlertPostData = {
    body: AlertCreate;
    path?: never;
    query?: never;
    url: '/alert/';
};

export type CreateAlertAlertPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateAlertAlertPostError = CreateAlertAlertPostErrors[keyof CreateAlertAlertPostErrors];

export type CreateAlertAlertPostResponses = {
    /**
     * Successful Response
     */
    200: AlertPublic;
};

export type CreateAlertAlertPostResponse = CreateAlertAlertPostResponses[keyof CreateAlertAlertPostResponses];

export type DeleteAlertAlertAlertIdDeleteData = {
    body?: never;
    path: {
        alert_id: number;
    };
    query?: never;
    url: '/alert/{alert_id}';
};

export type DeleteAlertAlertAlertIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteAlertAlertAlertIdDeleteError = DeleteAlertAlertAlertIdDeleteErrors[keyof DeleteAlertAlertAlertIdDeleteErrors];

export type DeleteAlertAlertAlertIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteAlertAlertAlertIdDeleteResponse = DeleteAlertAlertAlertIdDeleteResponses[keyof DeleteAlertAlertAlertIdDeleteResponses];

export type GetAlertAlertAlertIdGetData = {
    body?: never;
    path: {
        alert_id: number;
    };
    query?: never;
    url: '/alert/{alert_id}';
};

export type GetAlertAlertAlertIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetAlertAlertAlertIdGetError = GetAlertAlertAlertIdGetErrors[keyof GetAlertAlertAlertIdGetErrors];

export type GetAlertAlertAlertIdGetResponses = {
    /**
     * Successful Response
     */
    200: AlertPublic;
};

export type GetAlertAlertAlertIdGetResponse = GetAlertAlertAlertIdGetResponses[keyof GetAlertAlertAlertIdGetResponses];

export type UpdateAlertAlertAlertIdPatchData = {
    body: AlertUpdate;
    path: {
        alert_id: number;
    };
    query?: never;
    url: '/alert/{alert_id}';
};

export type UpdateAlertAlertAlertIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateAlertAlertAlertIdPatchError = UpdateAlertAlertAlertIdPatchErrors[keyof UpdateAlertAlertAlertIdPatchErrors];

export type UpdateAlertAlertAlertIdPatchResponses = {
    /**
     * Successful Response
     */
    200: AlertPublic;
};

export type UpdateAlertAlertAlertIdPatchResponse = UpdateAlertAlertAlertIdPatchResponses[keyof UpdateAlertAlertAlertIdPatchResponses];

export type ListEventsEventGetData = {
    body?: never;
    path?: never;
    query?: {
        offset?: number;
        limit?: number;
        zone_id?: number | null;
        earthquake_id?: number | null;
        event_severity?: string | null;
        sort_by?: string | null;
        order?: 'asc' | 'desc';
    };
    url: '/event/';
};

export type ListEventsEventGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ListEventsEventGetError = ListEventsEventGetErrors[keyof ListEventsEventGetErrors];

export type ListEventsEventGetResponses = {
    /**
     * Successful Response
     */
    200: EventsPublic;
};

export type ListEventsEventGetResponse = ListEventsEventGetResponses[keyof ListEventsEventGetResponses];

export type CreateEventEventPostData = {
    body: EventCreate;
    path?: never;
    query?: never;
    url: '/event/';
};

export type CreateEventEventPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateEventEventPostError = CreateEventEventPostErrors[keyof CreateEventEventPostErrors];

export type CreateEventEventPostResponses = {
    /**
     * Successful Response
     */
    200: EventPublic;
};

export type CreateEventEventPostResponse = CreateEventEventPostResponses[keyof CreateEventEventPostResponses];

export type DeleteEventEventEventIdDeleteData = {
    body?: never;
    path: {
        event_id: number;
    };
    query?: never;
    url: '/event/{event_id}';
};

export type DeleteEventEventEventIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteEventEventEventIdDeleteError = DeleteEventEventEventIdDeleteErrors[keyof DeleteEventEventEventIdDeleteErrors];

export type DeleteEventEventEventIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteEventEventEventIdDeleteResponse = DeleteEventEventEventIdDeleteResponses[keyof DeleteEventEventEventIdDeleteResponses];

export type GetEventEventEventIdGetData = {
    body?: never;
    path: {
        event_id: number;
    };
    query?: never;
    url: '/event/{event_id}';
};

export type GetEventEventEventIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetEventEventEventIdGetError = GetEventEventEventIdGetErrors[keyof GetEventEventEventIdGetErrors];

export type GetEventEventEventIdGetResponses = {
    /**
     * Successful Response
     */
    200: EventPublic;
};

export type GetEventEventEventIdGetResponse = GetEventEventEventIdGetResponses[keyof GetEventEventEventIdGetResponses];

export type UpdateEventEventEventIdPatchData = {
    body: EventUpdate;
    path: {
        event_id: number;
    };
    query?: never;
    url: '/event/{event_id}';
};

export type UpdateEventEventEventIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateEventEventEventIdPatchError = UpdateEventEventEventIdPatchErrors[keyof UpdateEventEventEventIdPatchErrors];

export type UpdateEventEventEventIdPatchResponses = {
    /**
     * Successful Response
     */
    200: EventPublic;
};

export type UpdateEventEventEventIdPatchResponse = UpdateEventEventEventIdPatchResponses[keyof UpdateEventEventEventIdPatchResponses];

export type ListZonesZoneGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/zone/';
};

export type ListZonesZoneGetResponses = {
    /**
     * Successful Response
     */
    200: ZonesPublic;
};

export type ListZonesZoneGetResponse = ListZonesZoneGetResponses[keyof ListZonesZoneGetResponses];

export type CreateZoneZonePostData = {
    body: ZoneCreate;
    path?: never;
    query?: never;
    url: '/zone/';
};

export type CreateZoneZonePostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateZoneZonePostError = CreateZoneZonePostErrors[keyof CreateZoneZonePostErrors];

export type CreateZoneZonePostResponses = {
    /**
     * Successful Response
     */
    200: ZonePublic;
};

export type CreateZoneZonePostResponse = CreateZoneZonePostResponses[keyof CreateZoneZonePostResponses];

export type DeleteZoneZoneZoneIdDeleteData = {
    body?: never;
    path: {
        zone_id: number;
    };
    query?: never;
    url: '/zone/{zone_id}';
};

export type DeleteZoneZoneZoneIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteZoneZoneZoneIdDeleteError = DeleteZoneZoneZoneIdDeleteErrors[keyof DeleteZoneZoneZoneIdDeleteErrors];

export type DeleteZoneZoneZoneIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteZoneZoneZoneIdDeleteResponse = DeleteZoneZoneZoneIdDeleteResponses[keyof DeleteZoneZoneZoneIdDeleteResponses];

export type GetZoneZoneZoneIdGetData = {
    body?: never;
    path: {
        zone_id: number;
    };
    query?: never;
    url: '/zone/{zone_id}';
};

export type GetZoneZoneZoneIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetZoneZoneZoneIdGetError = GetZoneZoneZoneIdGetErrors[keyof GetZoneZoneZoneIdGetErrors];

export type GetZoneZoneZoneIdGetResponses = {
    /**
     * Successful Response
     */
    200: ZonePublic;
};

export type GetZoneZoneZoneIdGetResponse = GetZoneZoneZoneIdGetResponses[keyof GetZoneZoneZoneIdGetResponses];

export type UpdateZoneZoneZoneIdPatchData = {
    body: ZoneUpdate;
    path: {
        zone_id: number;
    };
    query?: never;
    url: '/zone/{zone_id}';
};

export type UpdateZoneZoneZoneIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateZoneZoneZoneIdPatchError = UpdateZoneZoneZoneIdPatchErrors[keyof UpdateZoneZoneZoneIdPatchErrors];

export type UpdateZoneZoneZoneIdPatchResponses = {
    /**
     * Successful Response
     */
    200: ZonePublic;
};

export type UpdateZoneZoneZoneIdPatchResponse = UpdateZoneZoneZoneIdPatchResponses[keyof UpdateZoneZoneZoneIdPatchResponses];

export type ListReportsReportGetData = {
    body?: never;
    path?: never;
    query?: {
        offset?: number;
        limit?: number;
        alert_id?: number | null;
        user_id?: number | null;
        report_factory_zone?: number | null;
        sort_by?: string | null;
        order?: 'asc' | 'desc';
    };
    url: '/report/';
};

export type ListReportsReportGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ListReportsReportGetError = ListReportsReportGetErrors[keyof ListReportsReportGetErrors];

export type ListReportsReportGetResponses = {
    /**
     * Successful Response
     */
    200: ReportsPublic;
};

export type ListReportsReportGetResponse = ListReportsReportGetResponses[keyof ListReportsReportGetResponses];

export type CreateReportReportPostData = {
    body: ReportCreate;
    path?: never;
    query?: never;
    url: '/report/';
};

export type CreateReportReportPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateReportReportPostError = CreateReportReportPostErrors[keyof CreateReportReportPostErrors];

export type CreateReportReportPostResponses = {
    /**
     * Successful Response
     */
    200: ReportPublic;
};

export type CreateReportReportPostResponse = CreateReportReportPostResponses[keyof CreateReportReportPostResponses];

export type DeleteReportReportReportIdDeleteData = {
    body?: never;
    path: {
        report_id: number;
    };
    query?: never;
    url: '/report/{report_id}';
};

export type DeleteReportReportReportIdDeleteErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteReportReportReportIdDeleteError = DeleteReportReportReportIdDeleteErrors[keyof DeleteReportReportReportIdDeleteErrors];

export type DeleteReportReportReportIdDeleteResponses = {
    /**
     * Successful Response
     */
    200: {
        [key: string]: unknown;
    };
};

export type DeleteReportReportReportIdDeleteResponse = DeleteReportReportReportIdDeleteResponses[keyof DeleteReportReportReportIdDeleteResponses];

export type GetReportReportReportIdGetData = {
    body?: never;
    path: {
        report_id: number;
    };
    query?: never;
    url: '/report/{report_id}';
};

export type GetReportReportReportIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetReportReportReportIdGetError = GetReportReportReportIdGetErrors[keyof GetReportReportReportIdGetErrors];

export type GetReportReportReportIdGetResponses = {
    /**
     * Successful Response
     */
    200: ReportPublic;
};

export type GetReportReportReportIdGetResponse = GetReportReportReportIdGetResponses[keyof GetReportReportReportIdGetResponses];

export type UpdateReportReportReportIdPatchData = {
    body: ReportUpdate;
    path: {
        report_id: number;
    };
    query?: never;
    url: '/report/{report_id}';
};

export type UpdateReportReportReportIdPatchErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UpdateReportReportReportIdPatchError = UpdateReportReportReportIdPatchErrors[keyof UpdateReportReportReportIdPatchErrors];

export type UpdateReportReportReportIdPatchResponses = {
    /**
     * Successful Response
     */
    200: ReportPublic;
};

export type UpdateReportReportReportIdPatchResponse = UpdateReportReportReportIdPatchResponses[keyof UpdateReportReportReportIdPatchResponses];

export type RootGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/';
};

export type RootGetResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type ClientOptions = {
    baseUrl: 'http://0.0.0.0:8000' | (string & {});
};