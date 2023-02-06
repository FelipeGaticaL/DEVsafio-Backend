/**
 * @swagger
 * paths:
 *  /auth/register:
 *      post:
 *          tags:
 *              - User
 *          summary: Crea un usuario
 *          description: Endpoint para registrar un usuario
 *          requestBody:
 *              description: Objeto para crear un usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *              required: true
 *          responses:
 *              200:
 *                  description: Operación exitosa
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Registro exitoso para Usuario Rodrigo
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              500:
 *                  $ref: '#/components/responses/ServerError'
 *  /auth/login:
 *      post:
 *          tags:
 *              - User
 *          summary: Iniciar sesión para un usuario
 *          description: Endpoint de login
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                          example:
 *                              email: firstUser@mail.com
 *                              password: firstPassword123
 *              required: true
 *          responses:
 *              200:
 *                  description: Inicio de sesión exitoso
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/responses/UserLogin'
 *              403:
 *                  $ref: '#/components/responses/Forbidden'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *  /users:
 *      post:
 *          tags:
 *              - User
 *          summary: Agrega el work profile al usuario
 *          description: Endpoint para agregar todos los datos al usuario
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              oneOf:
 *                                  - $ref: '#/components/schemas/WorkProfile'
 *                                  - $ref: '#/components/schemas/EducationExperiences'
 *                                  - $ref: '#/components/schemas/WorkprofileDevLanguages'
 *                                  - $ref: '#/components/schemas/WorkprofileDatabases'
 *                                  - $ref: '#/components/schemas/WorkprofileTools'
 *                                  - $ref: '#/components/schemas/WorkprofileSoftSkills'
 *              required: true
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Operación exitosa
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Sus datos se han guardado correctamente
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                $ref: '#/components/responses/NotFound'
 *              ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /applicant:
 *      get:
 *          tags:
 *              - User
 *          summary: Obtiene el workprofile de un usuario
 *          description: Endpoint para obtener el workprofile del usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  oneOf:
 *                                      - $ref: '#/components/schemas/WorkProfile'
 *                                      - $ref: '#/components/schemas/EducationExperiences'
 *                                      - $ref: '#/components/schemas/WorkprofileDevLanguages'
 *                                      - $ref: '#/components/schemas/WorkprofileDatabases'
 *                                      - $ref: '#/components/schemas/WorkprofileTools'
 *                                      - $ref: '#/components/schemas/WorkprofileSoftSkills'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /auth/forgot-password:
 *      post:
 *          tags:
 *              - User
 *          summary: Password olvidada
 *          description: Endpoint para recuperar password
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                          example:
 *                              email: firstUser@mail.com
 *              required: true
 *          responses:
 *              200:
 *                  description: Email correcto
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: El link para el reset del password se ha enviado al mail
 *              404:
 *                  description: No encuentra el email
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: No existe el email
 *  /auth/reset-password:
 *      post:
 *          tags:
 *              - User
 *          summary: Restablece la password
 *          description: Endpoint para recuperar password
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              values:
 *                                  type: object
 *                                  properties:
 *                                      password:
 *                                          type: string
 *                                          example: nuevaPassword123
 *                                      passwordConfirm:
 *                                          type: string
 *                                          example: nuevaPassword123
 *                              token:
 *                                  $ref: '#/components/parameters/token'
 *              required: true
 *          responses:
 *              200:
 *                  description: Email correcto
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Los datos se han actualizado con éxito
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  description: No encuentra el email
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: No existe el email
 *              422:
 *                  description: No encuentra el email
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      example: Token inválido ó Contraseñas no coinciden
 *  /users/cv:
 *      put:
 *          tags:
 *              - User
 *          summary: Cambia la dirección del cirrículum
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              cvUrl:
 *                                  type: string
 *                          required:
 *                              - cvUrl
 *                          example:
 *                              cvUrl: http://www.micv.cl
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/personal-data:
 *      put:
 *          tags:
 *              - User
 *          summary: Modifica los datos personales del usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              phoneNumber:
 *                                  type: string
 *                              city:
 *                                  type: string
 *                              linkedinUrl:
 *                                  type: string
 *                              githubUrl:
 *                                  type: string
 *                          required:
 *                              - firstName
 *                              - lastName
 *                              - email
 *                              - phoneNumber
 *                              - city
 *                              - linkedinUrl
 *                              - githubUrl
 *                          example:
 *                              firstName: Rodrigo
 *                              lastName: Quezada
 *                              email: firstUser@mail.com
 *                              phoneNumber: +56965930736
 *                              city: Santiago
 *                              linkedinUrl: http://www.linkedinUrl.net
 *                              githubUrl: http://www.githubUrl.net
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/work-experience:
 *      put:
 *          tags:
 *              - User
 *          summary: Modifica los datos de la experiencia laboral
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              englishLevel:
 *                                  type: string
 *                              devExperience:
 *                                  type: string
 *                          required:
 *                              - englishLevel
 *                              - devExperience
 *                          example:
 *                              englishLevel: Sin nivel
 *                              devExperience: Sin experiencia
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/availability:
 *      put:
 *          tags:
 *              - User
 *          summary: Modifica los datos de la disponibilidad
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              workAvailability:
 *                                  type: string
 *                              availabilityStatus:
 *                                  type: string
 *                          required:
 *                              - workAvailability
 *                              - availabilityStatus
 *                          example:
 *                              workAvailability: partime
 *                              availabilityStatus: Inmediata
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/stack-salary:
 *      put:
 *          tags:
 *              - User
 *          summary: Modifica los datos del rol y salario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              stack:
 *                                  type: string
 *                              currentSalary:
 *                                  type: string
 *                          required:
 *                              - stack
 *                              - currentSalary
 *                          example:
 *                              stack: Fullstack
 *                              currentSalary: Salario actual de 1.000.000 USD
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                  $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/skills:
 *      get:
 *          tags:
 *              - User
 *          summary: Retorna las skills de un usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/GetSkills'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/edit-devlanguages:
 *      post:
 *          tags:
 *              - User
 *          summary: Edita las herramientas de un usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar las herramientas
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/WorkprofileDevLanguages'
 *              required: true
 *          responses:
 *            200:
 *                $ref: '#/components/responses/GenericSkills'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /users/edit-databases:
 *      post:
 *          tags:
 *              - User
 *          summary: Edita las databases/framework de un usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar las databases/framework
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/WorkprofileDatabases'
 *              required: true
 *          responses:
 *            200:
 *                $ref: '#/components/responses/GenericSkills'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /users/edit-tools:
 *      post:
 *          tags:
 *              - User
 *          summary: Edita las tools de un usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar las tools
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/WorkprofileTools'
 *              required: true
 *          responses:
 *            200:
 *                $ref: '#/components/responses/GenericSkills'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /users/education:
 *      put:
 *          tags:
 *              - User
 *          summary: modifica la educación del usuario
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              instituteName:
 *                                  type: string
 *                              startMonth:
 *                                  type: string
 *                              endMonth:
 *                                  type: string
 *                              startYear:
 *                                  type: integer
 *                              endYear:
 *                                  type: integer
 *                          required:
 *                              - name
 *                              - instituteName
 *                              - startMonth
 *                              - endMonth
 *                              - startYear
 *                              - endYear
 *                          example:
 *                              name: Bootcamp
 *                              instituteName: miHogar
 *                              startMonth: enero
 *                              endMonth: diciembre
 *                              startYear: 2023
 *                              endYear: 2023
 *              required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/UpdateInfoOK'
 *              401:
 *                  $ref: '#/components/responses/Unauthorized'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /users/education/{id}:
 *      delete:
 *          tags:
 *              - User
 *          summary: Elimina una experiencia de educación
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *              - name: id
 *                in: path
 *                description: id para eliminar elemento en la base de datos
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Perfil educacional eliminado correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/Unprocessable'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /soft-skills:
 *      get:
 *          tags:
 *              - Work Profile
 *          summary: Obtiene las habilidades blandas
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/WorkProfilesTables'
 *              404:
 *                  $ref: '#/components/responses/NotFound'
 *              ERROR:
 *                  $ref: '#/components/responses/ERROR'
 *  /tools:
 *      get:
 *          tags: 
 *              - Work Profile
 *          summary: retorna todas las tools
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /dev-languages:
 *      get:
 *          tags: 
 *              - Work Profile
 *          summary: retorna la lista de dev languajes
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /databases:
 *      get:
 *          tags: 
 *              - Work Profile
 *          summary: retorna toda la databases
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/get-tools:
 *      get:
 *          tags:
 *              - Admin
 *          summary: Retorna una lista con las herramientas
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/create-tool:
 *      post:
 *          tags:
 *              - Admin
 *          summary: Crea una herramienta
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para crear una herramienta
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              tool:
 *                                  type: string
 *                          example:
 *                              tool: herramienta 1
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha generado una nueva herramienta
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/update-tool:
 *      put:
 *          tags:
 *              - Admin
 *          summary: Edita una herramienta
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar una herramienta
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              tool:
 *                                  type: string
 *                          example:
 *                              id: 34
 *                              tool: herramienta 2
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha actualizado una herramienta correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/delete-tool:
 *      delete:
 *          tags:
 *              - Admin
 *          summary: Elimina una herramienta
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Dato para eliminar una herramienta
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                          example:
 *                              id: 34
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha eliminado una herramienta correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/Unprocessable'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/get-database:
 *      get:
 *          tags:
 *              - Admin
 *          summary: Retorna una lista con las databases
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/create-database:
 *      post:
 *          tags:
 *              - Admin
 *          summary: Crea una database/framework
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para crear una database/framework
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              database:
 *                                  type: string
 *                          example:
 *                              database: database 2
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha generado una base de datos o framework correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/update-database:
 *      put:
 *          tags:
 *              - Admin
 *          summary: Edita una database/framemwork
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar una database/framemwork
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              database:
 *                                  type: string
 *                          example:
 *                              id: 25
 *                              database: herramienta 24
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha actualizado una database/framework correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/delete-database:
 *      delete:
 *          tags:
 *              - Admin
 *          summary: Elimina una database/framework
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Dato para eliminar una database/framework
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                          example:
 *                              id: 34
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha eliminado una database/framework correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/Unprocessable'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/get-devlenguages:
 *      get:
 *          tags:
 *              - Admin
 *          summary: Retorna una lista con los lenguajes de programación
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorkProfilesTables'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/create-devlenguage:
 *      post:
 *          tags:
 *              - Admin
 *          summary: Crea un lenguaje de programación
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para crear un lenguaje de programación
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              devlenguage:
 *                                  type: string
 *                          example:
 *                              devlenguage: Bash/Shell-2
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha generado un lenguaje correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/update-devlenguage:
 *      put:
 *          tags:
 *              - Admin
 *          summary: Edita un lenguaje de programación
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Datos para editar un lenguaje de programación
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              devlenguage:
 *                                  type: string
 *                          example:
 *                              id: 25
 *                              devlenguage: Martillo 1
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha actualizado el lenguaje correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/delete-devlenguage:
 *      delete:
 *          tags:
 *              - Admin
 *          summary: Elimina un lenguaje de programación
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          requestBody:
 *              description: Dato para eliminar un lenguaje de programación
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                          example:
 *                              id: 17
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Se ha eliminado un lenguaje correctamente
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/Unprocessable'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/get-workprofiles:
 *      get:
 *          tags:
 *              - Admin
 *          summary: Retorna una lista con todos los work profiles
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/AdminWorkProfilesTables'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /admin/get-companies:
 *      get:
 *          tags:
 *              - Admin
 *          summary: Retorna una lista con los contactos de las compañias
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/GetCompanies'
 *            401:
 *                $ref: '#/components/responses/Unauthorized'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /work-area-company:
 *      get:
 *          tags:
 *              - Company
 *          summary: Retorna una lista con las areas de trabajo
 *          responses:
 *            200:
 *                $ref: '#/components/responses/WorksArea'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /contact-company:
 *      post:
 *          tags:
 *              - Company
 *          summary: Crea un contacto de una compañia
 *          requestBody:
 *              description: Datos para crear un lenguaje de programación
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Company'
 *              required: true
 *          responses:
 *            200:
 *                description: Consulta procesada con éxito
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                              message:
 *                                  type: string
 *                            example:
 *                              message: Empresa registrada con éxito
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            422:
 *                $ref: '#/components/responses/UnprocessableEntity'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
 *  /tests:
 *      get:
 *          tags:
 *              - Test
 *          summary: Retorna una lista con los test
 *          parameters:
 *              - name: token
 *                in: header
 *                description: token para autentificar
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *            200:
 *                $ref: '#/components/responses/Test'
 *            404:
 *                $ref: '#/components/responses/NotFound'
 *            ERROR:
 *                $ref: '#/components/responses/ERROR'
*/

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              firstName:
 *                  type: string
 *              lastName:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *          required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *          example:
 *              firstName: Rodrigo
 *              lastName: Quezada
 *              email: firstUser@mail.com
 *              password: firstPassword123
 *      WorkProfile:
 *          type: object
 *          properties:
 *              phoneNumber:
 *                  type: string
 *              city:
 *                  type: string
 *              country:
 *                  type: string
 *              gender:
 *                  type: string
 *              employmentStatusCurrent:
 *                  type: string
 *              stack:
 *                  type: string
 *              educationalLevel:
 *                  type: string
 *              educationStatusCurrent:
 *                  type: string
 *              englishLevel:
 *                  type: string
 *              additionalToolsComment:
 *                  type: string
 *              cvUrl:
 *                  type: string
 *              linkedinUrl:
 *                  type: string
 *              githubUrl:
 *                  type: string
 *              portfolioUrl:
 *                  type: string
 *              featuredProject:
 *                  type: string
 *              devExperience:
 *                  type: string
 *              idealWorkComment:
 *                  type: string
 *              workAvailability:
 *                  type: string
 *              relocationOption:
 *                  type: string
 *              visa:
 *                  type: string
 *          required:
 *              - phoneNumber
 *              - city
 *              - country
 *              - gender
 *              - employmentStatusCurrent
 *              - stack
 *              - educationalLevel
 *              - educationStatusCurrent
 *              - englishLevel
 *              - cvUrl
 *              - linkedinUrl
 *              - githubUrl
 *              - portfolioUrl
 *              - featuredProject
 *              - devExperience
 *              - idealWorkComment
 *              - workAvailability
 *              - relocationOption
 *              - visa
 *          example:
 *              phoneNumber: +56965930736
 *              city: Santiago
 *              country: Chile
 *              gender: Masculino
 *              employmentStatusCurrent: Sin Empleo
 *              stack: full stack
 *              educationalLevel: universitaria
 *              educationStatusCurrent: Bootcamp
 *              englishLevel: no level
 *              additionalToolsComment: Nest JS
 *              cvUrl: http://www.cvUrl.net
 *              linkedinUrl: http://www.linkedinUrl.net
 *              githubUrl: http://www.githubUrl.net
 *              portfolioUrl: http://www.portfolioUrl.net
 *              featuredProject: web para vender productos
 *              devExperience: sin experiencia
 *              idealWorkComment: No lo tengo claro aún
 *              workAvailability: fulltime, partime
 *              relocationOption: quiero trabajar desde mi ciudad
 *              visa: Mi país de residencia actual
 *      WorkprofileDatabases:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  databaseId:
 *                      type: integer
 *                  level:
 *                      type: integer
 *              example:
 *                  databaseId: 3
 *                  level: 2
 *      WorkprofileDevLanguages:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  devLanguageId:
 *                      type: integer
 *                  level:
 *                      type: integer
 *              example:
 *                  devLanguageId: 2
 *                  level: 2
 *      WorkprofileSoftSkills:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  softSkillsId:
 *                      type: integer
 *                  level:
 *                      type: integer
 *              example:
 *                  softSkillsId: 2
 *                  level: 2
 *      WorkprofileTools:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  toolsId:
 *                      type: integer
 *                  level:
 *                      type: integer
 *              example:
 *                  toolsId: 2
 *                  level: 2
 *      EducationExperiences:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  instituteName:
 *                      type: string
 *                  type:
 *                      type: string
 *                  startMonth:
 *                      type: string
 *                  endMonth:
 *                      type: string
 *                  startYear:
 *                      type: integer
 *                  endYear:
 *                      type: integer
 *              example:
 *                  name: nombre de prueba
 *                  instituteName: nombre institución
 *                  type: type
 *      Company:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  example: Hugo
 *              lastName:
 *                  type: string
 *                  example: Sepulveda
 *              email:
 *                  type: string
 *                  example: hugosep@mail.com
 *              phone:
 *                  type: string
 *                  example: +45248269514
 *              companyName:
 *                  type: string
 *                  example: nuevaCompañia
 *              doubts:
 *                  type: string
 *                  example: Buscando Programador
 *      Test:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  example: Test de un lenguaje
 *              image:
 *                  type: string
 *                  example: dirección imagen
 *              description:
 *                  type: string
 *                  example: prueba nivel 1
 *              duration:
 *                  type: string
 *                  example: 30 minutos
 *              link:
 *                  type: string
 *                  example: https://evalart.com/test
 *              status:
 *                  type: string
 *                  example: active
 *  responses:
 *      UnprocessableEntity:
 *          description: Error en el registro
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          errors:
 *                              type: string
 *                              example: Internal Server Error
 *                          message:
 *                              type: array
 *                              items: {}
 *                              example: [El nombre debe contener al menos 2 letras,
 *                                        Email requerido,
 *                                        El password debe tener mínimo 8 caracteres alfanumérica y debe tener 1 mayúscula]
 *      ServerError:
 *          description: Error en el servidor
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              example: Validation error
 *      UserLogin:
 *          type: object
 *          properties:
 *              user:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: integer
 *                      firstName:
 *                          type: string
 *                      lastName:
 *                          type: string
 *                      email:
 *                          type: string
 *                      roleId:
 *                          type: integer
 *                      statusId:
 *                          type: integer
 *                      createdAt:
 *                          type: string
 *                      updateAt:
 *                          type: string
 *                  example:
 *                      id: 1
 *                      firstName: Rodrigo
 *                      lastName: Quezada
 *                      email: firstUser@mail.com
 *                      roleId: 1
 *                      statusId: 1
 *                      createdAt: 2022-11-20T05:54:19.495Z
 *                      updateAt: 2022-11-20T05:54:19.495Z
 *              token:
 *                  $ref: '#/components/parameters/token'
 *      WorkProfilesTables:
 *          description: Consulta procesada con éxito
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items: 
 *                          $ref: '#/components/responses/ArrayObject'
 *      NotFound:
 *          description: No se encontró la información
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              example: Cannot METHOD /api/routeName
 *      Unauthorized:
 *          description: Error cuando no tienes autorización
 *          content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: No tiene autorizacion
 *      ERROR:
 *          description: Error cuando el servidor está desconectado
 *          content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: Connection was refused by the server.
 *      ArrayObject:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              name:
 *                  type: string
 *          example:
 *              id: 1
 *              name: SoftSkill-Lenguage-Framework-Tool
 *      UpdateInfoOK:
 *          description: Datos actualizados correctamente
 *          content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: Sus datos se han actualizado correctamente
 *      Unprocessable:
 *          description: Error en la consulta
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                            type: string
 *                      example:
 *                        message: Error al crear/modificar/eliminar
 *      GetSkills:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          devlanguages:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                          example: 1
 *                                      name:
 *                                          type: string
 *                                          example: Python
 *                                      devLanguageId:
 *                                          type: integer
 *                                          example: 1
 *                                      level:
 *                                          type: integer
 *                                          example: 1
 *                                      workProfileId:
 *                                          type: integer
 *                                          example: 1
 *                          databases:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                          example: 1
 *                                      name:
 *                                          type: string
 *                                          example: Python
 *                                      databaseId:
 *                                          type: integer
 *                                          example: 1
 *                                      level:
 *                                          type: integer
 *                                          example: 1
 *                                      workProfileId:
 *                                          type: integer
 *                                          example: 1
 *                          tools:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                          example: 1
 *                                      name:
 *                                          type: string
 *                                          example: Python
 *                                      toolsId:
 *                                          type: integer
 *                                          example: 1
 *                                      level:
 *                                          type: integer
 *                                          example: 1
 *                                      workProfileId:
 *                                          type: integer
 *                                          example: 1
 *      WorksArea:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 3
 *                              name:
 *                                  type: string
 *                                  example: Diseñador UX/UI
 *      Test:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 1
 *                              name:
 *                                  type: string
 *                                  example: Test de un lenguaje
 *                              image:
 *                                  type: string
 *                                  example: dirección imagen
 *                              description:
 *                                  type: string
 *                                  example: prueba nivel 1
 *                              duration:
 *                                  type: string
 *                                  example: 30 minutos
 *                              link:
 *                                  type: string
 *                                  example: https://evalart.com/test
 *                              status:
 *                                  type: string
 *                                  example: active
 *      AdminWorkProfilesTables:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 1
 *                              firstName:
 *                                  type: string
 *                                  example: Alexis
 *                              lastName:
 *                                  type: string
 *                                  example: Sanchez
 *                              email:
 *                                  type: string
 *                                  example: doglover@gmail.com
 *                              createdAt:
 *                                  type: string
 *                                  example: 2023-01-27T06:22:53.219Z
 *                              updateAt:
 *                                  type: string
 *                                  example: 2023-01-27T06:22:53.219Z
 *                              phoneNumber:
 *                                  type: string
 *                                  example: +56965930736
 *                              city:
 *                                  type: string
 *                                  example: Santiago
 *                              country:
 *                                  type: string
 *                                  example: Chile
 *                              gender:
 *                                  type: string
 *                                  example: Masculino
 *                              employmentStatusCurrent:
 *                                  type: string
 *                                  example: Sin Emple
 *                              stack:
 *                                  type: string
 *                                  example: full stack
 *                              educationalLevel:
 *                                  type: string
 *                                  example: universitaria
 *                              educationStatusCurrent:
 *                                  type: string
 *                                  example: Bootcamp
 *                              englishLevel:
 *                                  type: string
 *                                  example: No Level
 *                              additionalToolsComment:
 *                                  type: string
 *                                  example: NestJS
 *                              cvUrl:
 *                                  type: string
 *                                  example: http://www.cvUrlAlexis.net
 *                              linkedinUrl:
 *                                  type: string
 *                                  example: http://www.linkedinUrlAlexis.net
 *                              githubUrl:
 *                                  type: string
 *                                  example: http://www.githubUrlAlexis.net
 *                              portfolioUrl:
 *                                  type: string
 *                                  example: http://www.portfolioUrlAlexis.net
 *                              featuredProject:
 *                                  type: string
 *                                  example: web para vender productos
 *                              devExperience:
 *                                  type: string
 *                                  example: sin experiencia
 *                              idealWorkComment:
 *                                  type: string
 *                                  example: No lo tengo claro aún
 *                              workAvailability:
 *                                  type: string
 *                                  example: fulltime, partime
 *                              availabilityStatus:
 *                                  type: string
 *                                  example: Disponibilidad inmediata
 *                              currentSalary:
 *                                  type: string
 *                                  example: Salario actual de 1.500.000 USD
 *                              relocationOption:
 *                                  type: string
 *                                  example: Trabajar desde Francia
 *                              visa:
 *                                  type: string
 *                                  example: Inglesa, Chilena
 *                              userId:
 *                                  type: integer
 *                                  example: 7
 *      GetCompanies:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 5
 *                              companyName:
 *                                  type: string
 *                                  example: Space X
 *                              name:
 *                                  type: string
 *                                  example: Elon
 *                              lastName:
 *                                  type: string
 *                                  example: Musk
 *                              email:
 *                                  type: string
 *                                  example: emusk@spacex.com
 *                              phone:
 *                                  type: string
 *                                  example: 8895887828
 *                              search:
 *                                  type: string
 *                                  example: Diseñador UX/UI, Analista QA
 *                              doubts:
 *                                  type: string
 *                                  example: Necesito un develop de la Nasa
 *      GenericSkills:
 *          description: Consulta exitosa
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  example: 10
 *                              skillId:
 *                                  type: integer
 *                                  example: 2
 *                              level:
 *                                  type: integer
 *                                  example: 3
 *                              workProfileId:
 *                                  type: integer
 *                                  example: 1
 *      Forbidden:
 *          description: Credenciales inválidas
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              example: Credenciales inválidas
 *  parameters:
 *      token:
 *          type: string
 *          description: Token de autentificación
 *          required: true
 *          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiUm9kcmlnbyIsImxhc3ROYW1lIjoiUXVlemFkYSIsImVtYWlsIjoiZmlyc3RVc2VyQG1haWwuY29tIiwicm9sZUlkIjoxLCJzdGF0dXNJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0xMS0yMFQwNTo1NDoxOS40OTVaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0yMFQwNTo1NDoxOS40OTVaIiwiaWF0IjoxNjY4OTU2MDI1LCJleHAiOjE2NjkwNDI0MjV9
 */