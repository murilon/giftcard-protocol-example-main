import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class GiftCardProvider extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    // The first argument is the base URl of your provider API endpoint
    super('baseURL', ctx, options)
  }

  public getGiftCardById(_: string) {
    /*
      This is the method that will be used to connect to the provider API
      and get a specific gift card by its id.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects.
      It receives a string, which is the id. For now, it returns a mocked gift card,
      but it's here where the connection with the external API will happen.
    */
    return {
      balance: 10,
      caption: 'Get GC by ID - Example',
      emissionDate: '2020-07-05T14:48:00.000Z',
      expiringDate: '2030-10-10T14:48:00.000Z',
      id: 'xpto1',
      provider: 'FabianaTest',
      transaction: {
        href: 'murilofaria/giftcardproviders/MuriloFariaGC',
      },
    }
  }

  public getListOfGiftCards(_: GiftCardListRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and get a list of available gift cards.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects.
      It receives a well defined body, which is the format that the hub uses. For now,
      it's returning a mocked list that contains only one gift card that is already
      in the format that the Hub expects.
    */
    return [
      {
        balance:  10,
        caption: '1st Obj List All GC - Example',
        emissionDate: '2020-07-05T14:48:00.000Z',
        expiringDate: '2030-10-10T14:48:00.000Z',
        id: 'xpto1',
        provider: 'MuriloFariaGC',
        transaction: {
          href: 'murilofaria/giftcardproviders/MuriloFariaGC'
        }
      },
      {
        balance:  20,
        caption: '2nd Obj List All GC - Example',
        emissionDate: '2020-07-05T14:48:00.000Z',
        expiringDate: '2030-10-10T14:48:00.000Z',
        id: 'xpto2',
        provider: 'MuriloFariaGC',
        transaction: {
          href: 'murilofaria/giftcardproviders/MuriloFariaGC'
        }
      }
    ]
  }

  public createGiftCard(body: GiftCardRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return body
  }

  public createTransaction(_: string, __: TransactionRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
   //console.log("teste")
    return {
      notFound: true
      
      /*
      cardId: 'xpto1',
      id: '01010101',
      _self: {
        href: 'appliancetheme/giftcardproviders/FabianaTest',
      },
    */}
  }

  public listTransactions(_: string) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return []
  }

  public getTransactionById(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction by its id.
      The parameter is the id.
    */
    return {}
  }

  public getTransactionAuthorization(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameters are the transaction id and the gift card id.
    */
    return {}
  }

  public createCancellation(
    _: string,
    __: string,
    ___: CreateCancellationBody
  ) {
    /*
      Method that handlers the case of creating a transaction cancellation.
    */
    return {}
  }

  public listAllCancellations(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameter is the id.
    */
    return {}
  }

  public createSettlement(_: string, __: string, ___: CreateSettlementBody) {
    /*
      Method that handlers the case of creating a transaction settlement.
    */
    return {}
  }

  public listAllSettlements(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameter is the id.
    */
    return {}
  }
}
